// BUTTON VARIABLES

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

// tempo buttons

var tempo300 = document.querySelector('.threehundred');
var tempo200 = document.querySelector('.twohundred');
var tempo150 = document.querySelector('.onefifty');
var tempoSubmit = document.querySelector('.tempoSubmit');

var tempoSlide = document.querySelector('.tempoSlide');
var tempoSlide2 = document.querySelector('.tempoSlideUp');

// settings buttons

var mouseTrackButton = document.querySelector('.mouseTrackButton');
var pitchTrackButton = document.querySelector('.pitchTrackButton');
var gridlockedButton = document.querySelector('.gridlockedButton');

// sequence buttons

var tonalVarianceBass = document.querySelector('.tonalVarianceBass');

var psyBass = document.querySelector('.psyBass');
var acidSequence = document.querySelector('.acidSequence');
var acidSequential = document.querySelector('.acidSequential');

var filterSweep = document.querySelector('.filterSweep');
var randomizeWaveform = document.querySelector('.randomizeWaveform');

// BUTTON CLICK FUNCTIONS

// mute button

var mute = document.querySelector('.mute');

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

// pitch twisters

var pitchSlide;

raisePitch.onclick = function() {
  pitchSlide = window.setInterval(slideUp, 300);
}

lowerPitch.onclick = function() {
  pitchSlide = window.setInterval(slideDown, 300);
}

twistDownPitch.onclick = function() {
  pitchSlide = window.setInterval(twistUp, 100);
}

twistUpPitch.onclick = function() {
  pitchSlide = window.setInterval(twistDown, 100);
}

// atonal variances

rapidVariance.onclick = function() {
  variance = setInterval(varianceFunc, 30);
}

// hundredMsVariance.onclick = function() {
//   variance = setInterval(varianceFunc, 100);
// }

twoHundredMsVariance.onclick = function() {
  variance = setInterval(varianceFunc, 200);
}

randomVariance.onclick = function() {
  variance = setInterval(varianceFunc2, (Math.random() * 300));
}

minuteVariance.onclick = function() {
  variance = setInterval(varianceFunc3, (Math.random() * 400));
}

// tonal variances

var filterSweepingVariance;

tonalVarianceBass.onclick = function() {
  filterSweepingVariance = setInterval(filterSweepFunc, 1);
  variance = setInterval(tonalVarianceFunc3, 300);
}

// sequences

psyBass.onclick = function () {
  variance = setInterval(psyBassFunc, tempo); // 150
}

acidSequence.onclick = function () {
  variance = setInterval(acidseq2, tempo); // 200
  console.log(tempo);
}

acidSequential.onclick = function() {
  acidSequentialFunc();
}

// filter sweeps

filterSweep.onclick = function() {
  variance = setInterval(filterSweepFunc, 1);
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