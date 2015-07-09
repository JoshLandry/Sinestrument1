var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

var analyser = audioCtx.createAnalyser(); // not sure why I need this

var oscillator1 = audioCtx.createOscillator();
var oscillator2 = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();

// filter (low shelf)

var biquadFilter = audioCtx.createBiquadFilter();

biquadFilter.type = "lowshelf";
biquadFilter.frequency.value = 1000;
biquadFilter.gain.value = 20;

// filter (low pass)

var lowPassFilter = audioCtx.createBiquadFilter();

lowPassFilter.type = "lowpass";
lowPassFilter.frequency.value = 800;

// filter (band pass)

var bandPassFilter = audioCtx.createBiquadFilter();

bandPassFilter.type = "bandpass";

// convolver

// routing

oscillator1.connect(analyser);
oscillator2.connect(analyser);
analyser.connect(biquadFilter);
biquadFilter.connect(lowPassFilter);
lowPassFilter.connect(gainNode);
gainNode.connect(audioCtx.destination);

var initialVol = 0.000;

// oscillator 1

oscillator1.type = 'sine';
oscillator1.frequency.value = 2200;
oscillator1.detune.value = 100;
oscillator1.start(0);

oscillator1.onended = function() {
  console.log('somehow, your tone has ended');
}

// oscillator 2

oscillator2.type = 'square';
oscillator2.frequency.value = 1100;
oscillator2.detune.value = 100;
oscillator2.start(0);

oscillator2.onended = function() {
  console.log('somehow, your tone has ended');
}

gainNode.gain.value = initialVol;


// Pulsewave Modulating oscillator made using delay

function createDCOffset() {
  var buffer=audioContext.createBuffer(1,1,audioContext.sampleRate);
  var data = buffer.getChannelData(0);
  for (var i=0; i<1; i++)
    data[i]=1;
  var bufferSource=audioContext.createBufferSource();
  bufferSource.buffer=buffer;
  bufferSource.loop=true;
  return bufferSource;
}

function setDutyCycle(amt) {
  this.delay.delayTime.value = amt/this.frequency;  
  this.dcGain.gain.value = 1.7*(0.5-amt);
}

// he first writes a function which will create two new oscillators,
// and attaches one to a delay, to create PWM.  He creates a blank object
// for the PWM oscillator, and attaches the oscillators as properties,
// as well as the below start, stop and DCoffset functions.  I am unsure of 
// the significance of the DC offset, but I've left it in to make sure it will
// still work.

function start(time) {
  this.osc1.start(time);
  this.osc2.start(time);
  this.dcOffset.start(time);
}
function stop(time) {
  this.osc1.stop(time);
  this.osc2.stop(time);
  this.dcOffset.stop(time);
}

function createDCOffset() {
  var buffer=audioContext.createBuffer(1,1,audioContext.sampleRate);
  var data = buffer.getChannelData(0);
  for (var i=0; i<1; i++)
    data[i]=1;
  var bufferSource=audioContext.createBufferSource();
  bufferSource.buffer=buffer;
  bufferSource.loop=true;
  return bufferSource;
}

function createPWMOsc(freq, dutyCycle) {
  var pwm = new Object();
  var osc1 = audioContext.createOscillator();
  var osc2 = audioContext.createOscillator();
  var inverter = audioContext.createGain();
  var output = audioContext.createGain();
  var delay = audioContext.createDelay();
  inverter.gain.value=-1;
  osc1.type="sawtooth";
  osc2.type="sawtooth";
  osc1.frequency.value=freq;
  osc1.frequency.value=freq;
  osc1.connect(output);
  osc2.connect(inverter);
  inverter.connect(delay);
  delay.connect(output);
  var dcOffset = createDCOffset();
  var dcGain = audioContext.createGain();
  dcOffset.connect(dcGain);
  dcGain.connect(output);

  pwm.osc1=osc1;
  pwm.osc2=osc2;
  pwm.output=output;
  pwm.delay=delay;
  pwm.frequency = freq;
  pwm.dcGain=dcGain;
  pwm.dcOffset=dcOffset;
  pwm.setDutyCycle = setDutyCycle;
  pwm.start=start;
  pwm.stop=stop;

  pwm.setDutyCycle(dutyCycle);
  return pwm;
}