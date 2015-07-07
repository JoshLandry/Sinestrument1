// BUTTON VARIABLES

// settings buttons

var mute = document.querySelector('.mute');

var randomizeSequence = document.querySelector('.randomizeSequence');
var mouseTrackButton = document.querySelector('.mouseTrackButton');
var pitchTrackButton = document.querySelector('.pitchTrackButton');
var gridlockedButton = document.querySelector('.gridlockedButton');

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

// BUTTON CLICK FUNCTIONS

// mute button

mute.onclick = function() {
  if(mute.getAttribute('data-muted') === 'false') {
    gainNode.disconnect(audioCtx.destination);
    mute.setAttribute('data-muted', 'true');
    mute.innerHTML = "Unmute";
  } else {
    gainNode.connect(audioCtx.destination);
    mute.setAttribute('data-muted', 'false');
    mute.innerHTML = "Mute";
  };
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
  } else {
    pitchTrack = true;
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

// sequences

// fixed sequences

var filterSweepingVariance;

tonalVarianceBass.onclick = function() {
  filterSweepingVariance = setInterval(filterSweepFunc, 1);
  tonalVarianceFunc3();
  // variance = setInterval(tonalVarianceFunc3, 300);
}

acidSequential.onclick = function() {
  acidSequentialFunc();
}

//

psyBass.onclick = function () {
  psyBassFunc();
}

acidSequence.onclick = function () {
  acidseq2();
}

// scale sequences

cMajorScaleStart.onclick = function() {
  cMajorScale();
}

