var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

var analyser = audioCtx.createAnalyser(); // not sure why I need this
var oscilloAnalyser =audioCtx.createAnalyser();

var oscillator1 = audioCtx.createOscillator();
var oscillator2 = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();

// filter (low shelf)

var biquadFilter = audioCtx.createBiquadFilter();

biquadFilter.type = "lowshelf";
biquadFilter.frequency.value = 1000;
biquadFilter.gain.value = 8;

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
lowPassFilter.connect(oscilloAnalyser);
oscilloAnalyser.connect(gainNode);
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

// Volume Slider

function volumechange() {
  gainNode.gain.value = document.querySelector(".volume").value;
  console.log(gainNode.gain.value);
}



// PWN Osc

// Settings

function setDutyCycle(amt) {
  this.delay.delayTime.value = amt/this.frequency;  
  this.dcGain.gain.value = 1.7*(0.5-amt);
  console.log(this.delay.delayTime.value);
}

function dutycyclechange() {
  pwmOsc.setDutyCycle(1-parseFloat(document.getElementById("dutycycle").value));
}

function pwmfilterchange() {
  pwmLowPassFilter.frequency.value = document.querySelector(".pwmfilter").value;
  console.log(document.querySelector(".pwmfilter").value);
}

var pwmAnalyser = audioCtx.createAnalyser();
var pwmLowPassFilter = audioCtx.createBiquadFilter();

pwmLowPassFilter.type = "lowpass";
pwmLowPassFilter.frequency.value = 20000;

pwmAnalyser.connect(pwmLowPassFilter);

function start() {
  pwmOsc.output.connect(pwmAnalyser);
  pwmLowPassFilter.connect(oscilloAnalyser);
}
function stop() {
  pwmLowPassFilter.disconnect(oscilloAnalyser);
  // pwmOsc.output.disconnect(audioCtx.destination);
}

function createDCOffset() {
  var buffer = audioCtx.createBuffer(1,1,audioCtx.sampleRate);
  var data = buffer.getChannelData(0);
  for (var i=0; i<1; i++)
    data[i]=1;
  var bufferSource = audioCtx.createBufferSource();
  bufferSource.buffer = buffer;
  bufferSource.loop = true;
  return bufferSource;
}

function createPWMOsc(freq, dutyCycle) {
  var pwm = new Object();
  var osc1 = audioCtx.createOscillator();
  var osc2 = audioCtx.createOscillator();
  var inverter = audioCtx.createGain();
  var output = audioCtx.createGain();
  var delay = audioCtx.createDelay();
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
  var dcGain = audioCtx.createGain();
  dcOffset.connect(dcGain);
  dcGain.connect(output);

  osc1.start(0);
  osc2.start(0);
  dcOffset.start(0);

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

var pwmOsc = createPWMOsc(440,.5);

//