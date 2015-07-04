var mouseTrack = true;

var pitchTrack = true;

var gridlocked = true;

var stepInSequence = 0;

var tempo = 300;

var maxFreq = 6000;
var maxVol = 0.02;

// note envelope

var gate;

var gateFunc = function() {
  lowPassFilter.frequency.value = 0;
}

// filter modulation

var filterSweepFunc = function() {
  if(lowPassFilter.frequency.value < 6000) {
    lowPassFilter.frequency.value += 10
  } else {
    lowPassFilter.frequency.value = 0;
  }
}

// tempo effects

var tempoSlideUp = function() {
  tempo += 1;
}

var tempoSlideDown = function() {
  tempo -= 1;
}

// waveform randomization

var randomWaveFunc = function() {
  if(Math.random() < .5) {
    oscillator1.type = "square";
  } else {
    oscillator2.type = "sine";
  }

  if(Math.random() < .5) {
    oscillator1.type = "sine";
  } else {
    oscillator2.type = "triangle";
  }

  if(Math.random() < .5) {
    oscillator1.type = "sawtooth";
  } else {
    oscillator2.type = "square";
  }
}