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

// he first writes a function which will create two new oscillators,
// and attaches one to a delay, to create PWM.  He creates a blank object
// for the PWM oscillator, and attaches the oscillators as properties,
// as well as the below start, stop and DCoffset functions.  I am unsure of 
// the significance of the DC offset, but I've left it in to make sure it will
// still work.

function setDutyCycle(amt) {
  this.delay.delayTime.value = amt/this.frequency;  
  this.dcGain.gain.value = 1.7*(0.5-amt);
}

function dutycyclechange() {
  pwmOsc.setDutyCycle(1-parseFloat(document.getElementById("dutycycle").value));
}


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

  output.gain.value = 0.2;

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

pwmOsc.output.connect(audioCtx.destination);
pwmOsc.output.connect(analyser);

//

// Canvases / UI

//

// shim layer with setTimeout fallback
window.requestAnimationFrame = window.requestAnimationFrame       ||
  window.webkitRequestAnimationFrame;

var rafID;
var myOscilloscope = null;
var scopeCanvas = null;
var freqCanvas = null;

function draw() {  
  if (myOscilloscope) {
    myOscilloscope.draw(scopeCanvas.myContext);
    // if (freqCanvas)
    //   drawFreqBars(myOscilloscope.analyser,freqCanvas.context);
  }

  rafID = requestAnimationFrame( draw );
}

var oscilloscopeDiv = document.querySelector("div");

function setupCanvases( container ) {
  scopeCanvas = document.createElement( 'canvas' );
  scopeCanvas.width = 512; 
  scopeCanvas.height = 256; 
  scopeCanvas.id = "scope";
  scopeCanvas.myContext = scopeCanvas.getContext( '2d' );

  oscilloscopeDiv.insertBefore( scopeCanvas, oscilloscopeDiv.firstChild );

  // freqCanvas = document.createElement( 'canvas' );
  // freqCanvas.width = 1024; 
  // freqCanvas.height = 256; 
  // freqCanvas.id = "freqbars";
  // freqCanvas.context = freqCanvas.getContext( '2d' );

  // if (container)
  //   container.appendChild( freqCanvas );
  // else
  //   document.body.appendChild( freqCanvas );
}

function init() {
  setupCanvases();
  myOscilloscope = new Oscilloscope(analyser, 512, 256);
  draw();
}

window.addEventListener("load", init );

//

// Oscilloscope

//

function Oscilloscope(analyser,width,height) {
  this.analyser = analyser;
  this.data = new Uint8Array(analyser.frequencyBinCount);
  this.width = width;
  this.height = height;
}

Oscilloscope.prototype.draw = function (context) {
  var data = this.data;
  var quarterHeight = this.height/4;
  var scaling = this.height/256;

  this.analyser.getByteTimeDomainData(data);
  context.strokeStyle = "purple";
  context.lineWidth = 1;
  context.fillStyle="#004737";
  context.fillRect(0,0,this.width, this.height);
  context.beginPath();
  context.moveTo(0,0);
  context.lineTo(this.width,0);
  context.stroke();
  context.moveTo(0,this.height);
  context.lineTo(this.width,this.height);
  context.stroke();
  context.save();
  context.strokeStyle = "#006644";
  context.beginPath();
  if (context.setLineDash)
    context.setLineDash([5]);
  context.moveTo(0,quarterHeight);
  context.lineTo(this.width,quarterHeight);
  context.stroke();
  context.moveTo(0,quarterHeight*3);
  context.lineTo(this.width,quarterHeight*3);
  context.stroke();

  context.restore();
  context.beginPath();
  context.strokeStyle = "red";
  context.moveTo(0,quarterHeight*2);
  context.lineTo(this.width,quarterHeight*2);
  context.stroke();

  context.strokeStyle = "yellow";

  context.beginPath();

  var zeroCross = findFirstPositiveZeroCrossing(data, this.width);

  context.moveTo(0,(256-data[zeroCross])*scaling);
  for (var i=zeroCross, j=0; (j<this.width)&&(i<data.length); i++, j++)
    context.lineTo(j,(256-data[i])*scaling);

  context.stroke();
}

var MINVAL = 134;  // 128 == zero.  MINVAL is the "minimum detected signal" level.

function findFirstPositiveZeroCrossing(buf, buflen) {
  var i = 0;
  var last_zero = -1;
  var t;

  // advance until we're zero or negative
  while (i<buflen && (buf[i] > 128 ) )
    i++;

  if (i>=buflen)
    return 0;

  // advance until we're above MINVAL, keeping track of last zero.
  while (i<buflen && ((t=buf[i]) < MINVAL )) {
    if (t >= 128) {
      if (last_zero == -1)
        last_zero = i;
    } else
      last_zero = -1;
    i++;
  }

  // we may have jumped over MINVAL in one sample.
  if (last_zero == -1)
    last_zero = i;

  if (i==buflen)  // We didn't find any positive zero crossings
    return 0;

  // The first sample might be a zero.  If so, return it.
  if (last_zero == 0)
    return 0;

  return last_zero;
}