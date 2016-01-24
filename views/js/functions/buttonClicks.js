// BUTTON VARIABLES

// settings buttons

var poweron = document.querySelector('.poweron');

var mute = document.querySelector('.mute');

var stopSequenceButton = document.querySelector('.stopSequences');

var randomizeSequence = document.querySelector('.randomizeSequence');
var mouseTrackButton = document.querySelector('.mouseTrackButton');
var pitchTrackButton = document.querySelector('.pitchTrackButton');
var gridlockedButton = document.querySelector('.gridlockedButton');
var chaoticStackingButton = document.querySelector('.chaoticStacking');

// tempo buttons

var tempo300 = document.querySelector('.threehundred');
var tempo200 = document.querySelector('.twohundred');
var tempoSubmit = document.querySelector('.tempoSubmit');

var tempoSlide = document.querySelector('.tempoSlide');
var tempoSlide2 = document.querySelector('.tempoSlideUp');

// effects buttons

var filterSweep = document.querySelector('.filterSweep');
var randomizeWaveform = document.querySelector('.randomizeWaveform');

// pitch buttons

var pitchIncrement = 80;

var setPitch = document.querySelector('.setPitch');
var raisePitch = document.querySelector('.raisePitch');
var lowerPitch = document.querySelector('.lowerPitch');
var twistDownPitch = document.querySelector('.twistDownPitch');
var twistUpPitch = document.querySelector('.twistUpPitch');

var twoHundredMsVariance = document.querySelector('.twoHundredMsVariance');
var rapidVariance = document.querySelector('.rapidVariance');
var randomVariance = document.querySelector('.randomVariance');
var minuteVariance = document.querySelector('.minuteVariance');

// sequence buttons

var tonalVarianceBass = document.querySelector('.tonalVarianceBass');

var psyBass = document.querySelector('.psyBass');
var acidSequence = document.querySelector('.acidSequence');
var acidSequential = document.querySelector('.acidSequential');

var cMajorScaleStart = document.querySelector('.cMajorScale');
var lydianModeStart = document.querySelector('.lydianMode');
var locrianModeStart = document.querySelector('.locrianMode');
var wholeToneScaleStart = document.querySelector('.wholeToneScale');

// Arp your own chord

var submitNotes = document.querySelector('.submitNotes');
var playUserArp = document.querySelector('.playUserArp');

// PWM

var pwmMute = document.querySelector('.pwmMute');

// BUTTON CLICK FUNCTIONS

// poweron button



// mute button

mute.onclick = function() {
  if(mute.getAttribute('data-muted') === 'false') {
    lowPassFilter.disconnect(oscilloAnalyser);
    mute.setAttribute('data-muted', 'true');
    mute.innerHTML = "Unmute Osc 1 & 2";
  } else {
    lowPassFilter.connect(oscilloAnalyser);
    mute.setAttribute('data-muted', 'false');
    mute.innerHTML = "Mute Osc 1 & 2";
  };
}

stopSequenceButton.onclick = function() {
  stopAll();
}

var stopAll = function() {
  bedroomIDMPlaying = false;
  easternLoopPlaying = false;

  acidBassArp1Playing = false;
  acidBassArp2Playing = false;

  cMajorPlaying = false;
  lydianPlaying = false;
  locrianPlaying = false;
  wholeTonePlaying = false;

  userArpPlaying = false;
}

// reset button

var reset = document.querySelector('.reset');

reset.onclick = function() {
  location.reload();
}

// Tempo Settings

tempo300.onclick = function() {
  tempo = 300;
}

tempo200.onclick = function() {
  tempo = 200;
}

var userTempo;

tempoSubmit.onclick = function() {
  userTempo = document.querySelector('.userTempo').value;

  if(!userTempo) {
    alert("This is not a valid tempo");
  } else {
    console.log(userTempo);
    tempo = ( 30000 / userTempo );
  }
}

// pitch follows mouse

mouseTrackButton.onclick = function() {
  if(mouseTrack) {
    mouseTrack = false;
  } else {
    mouseTrack = true;
  }
};

pitchTrackButton.onclick = function() {
  if(pitchTrack) {
    pitchTrack = false;
    pitchTrackButton.setAttribute('data-pitchtrack', 'false');
    pitchTrackButton.innerHTML = "Turn On Pitch Tracking";
  } else {
    pitchTrack = true;
    pitchTrackButton.setAttribute('data-pitchtrack', 'true');
    pitchTrackButton.innerHTML = "Turn Off Pitch Tracking";
  }
};

gridlockedButton.onclick = function() {
  if(gridlocked) {
    gridlocked = false;
    gridlockedButton.setAttribute('data-locked', 'false');
    gridlockedButton.innerHTML = "Gridlock";
  } else {
    gridlocked = true;
    gridlockedButton.setAttribute('data-locked', 'true');
    gridlockedButton.innerHTML = "Unlock Grid";
  }
}

// Chaotic Stacking

chaoticStackingButton.onclick = function() {
  if(chaoticStacking) {
    chaoticStacking = false;
    chaoticStackingButton.setAttribute('data-stacking', 'false');
    chaoticStackingButton.innerHTML = "Turn On Chaotic Stacking";
  } else {
    chaoticStacking = true;
    chaoticStackingButton.setAttribute('data-stacking', 'true');
    chaoticStackingButton.innerHTML = "Turn Off Chaotic Stacking";
  }
}

// Randomize Seq

randomizeSequence.onclick = function() {
  if(randomizeSequence.getAttribute('data-random') === 'false') {
    randomizeSequence.setAttribute('data-random', 'true');
    randomized = true;
    randomizeSequence.innerHTML = "Derandomize Sequence";
  } else {
    randomized = false;
    randomizeSequence.setAttribute('data-random', 'false');
    randomizeSequence.innerHTML = "Randomize Sequence";
  };
}

// pitch twisters

var pitchSlide;

raisePitch.onclick = function() {
  pitchSlide = window.setInterval(slideUp, tempo);
}

lowerPitch.onclick = function() {
  pitchSlide = window.setInterval(slideDown, tempo);
}

twistDownPitch.onclick = function() {
  pitchSlide = window.setInterval(twistUp, tempo / 3);
}

twistUpPitch.onclick = function() {
  pitchSlide = window.setInterval(twistDown, tempo / 3);
}

// atonal variances

rapidVariance.onclick = function() {
  variance = setInterval(varianceFunc, tempo / 10);
}

// hundredMsVariance.onclick = function() {
//   variance = setInterval(varianceFunc, 100);
// }

twoHundredMsVariance.onclick = function() {
  variance = setInterval(varianceFunc, tempo * .667);
}

randomVariance.onclick = function() {
  variance = setInterval(varianceFunc2, (Math.random() * 300));
}

minuteVariance.onclick = function() {
  variance = setInterval(varianceFunc3, (Math.random() * 400));
}

// filter sweeps

filterSweep.onclick = function() {
  variance = setInterval(filterSweepFunc, tempo / 100);
}

// waveform randomization

randomizeWaveform.onclick = function() {
  variance = setInterval(randomWaveFunc, tempo);
}

//

tempoSlide.onclick = function() {
  variance = setInterval(tempoSlideUp, 100);
}

tempoSlide2.onclick = function() {
  variance = setInterval(tempoSlideDown, 100);
}

// SEQUENCES

// fixed sequences

var filterSweepingVariance;

tonalVarianceBass.onclick = function() {

  if(!chaoticStacking) {
    stopAll();
  }

  bedroomIDMPlaying = true;

  filterSweepingVariance = setInterval(filterSweepFunc, 1);
  tonalVarianceFunc3();
}

acidSequential.onclick = function() {

  if(!chaoticStacking) {
    stopAll();
  }

  easternLoopPlaying = true;

  acidSequentialFunc();
}

//

psyBass.onclick = function () {

  if(!chaoticStacking) {
    stopAll();
  }

  acidBassArp1Playing = true;

  psyBassFunc();
}

acidSequence.onclick = function () {

  if(!chaoticStacking) {
    stopAll();
  }

  acidBassArp2Playing = true;

  acidseq2();
}

// scale sequences

cMajorScaleStart.onclick = function() {

  if(!chaoticStacking) {
    stopAll();
  }

  cMajorPlaying = true;

  cMajorScale();
}

lydianModeStart.onclick = function() {

  if(!chaoticStacking) {
    stopAll();
  }

  lydianPlaying = true;

  lydianMode();
}

locrianModeStart.onclick = function() {

  if(!chaoticStacking) {
    stopAll();
  }

  locrianPlaying = true;

  locrianMode();
}

wholeToneScaleStart.onclick = function() {

  if(!chaoticStacking) {
    stopAll();
  }

  wholeTonePlaying = true;

  wholeToneScale();
}

submitNotes.onclick = function() {
  userNoteA = document.querySelector('.userNoteA').value
  userNoteB = document.querySelector('.userNoteB').value
  userNoteC = document.querySelector('.userNoteC').value
  userNoteD = document.querySelector('.userNoteD').value
  userNoteE = document.querySelector('.userNoteE').value

  userNoteA = noteParser(userNoteA);
  userNoteB = noteParser(userNoteB);
  userNoteC = noteParser(userNoteC);
  userNoteD = noteParser(userNoteD);
  userNoteE = noteParser(userNoteE);

  console.log(userNoteA + ", " + userNoteB + ", " + userNoteC + ", " + userNoteD + ", " + userNoteE)
}

playUserArp.onclick = function() {

  if(!chaoticStacking) {
    stopAll();
  }

  userArpPlaying = true;

  userArp();
}

// PWM Osc

pwmMute.onclick = function() {
  if(pwmMute.getAttribute('data-muted') === 'false') {
    pwmOsc.output.disconnect(pwmAnalyser);
    pwmLowPassFilter.disconnect(oscilloAnalyser);
    pwmMute.setAttribute('data-muted', 'true');
  } else {
    pwmOsc.output.connect(pwmAnalyser);
    pwmLowPassFilter.connect(oscilloAnalyser);
    pwmMute.setAttribute('data-muted', 'false');
  };
}