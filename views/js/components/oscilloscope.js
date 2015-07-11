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
  myOscilloscope = new Oscilloscope(oscilloAnalyser, 512, 256);
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
  context.strokeStyle = "purple";
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