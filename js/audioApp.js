// var toneDictionary = require('./toneDictionary.js');

//

var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

var analyser = audioCtx.createAnalyser(); // not sure why I need this

var oscillator1 = audioCtx.createOscillator();
var oscillator2 = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();

// oscillator1.connect(biquadFilter);
// oscillator2.connect(biquadFilter);
// biquadFilter.connect(gainNode);
// gainNode.connect(audioCtx.destination);

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

// var tonalVariance = document.querySelector('.tonalVariance');
// var tonalVarianceScale = document.querySelector('.tonalVarianceScale');
var tonalVarianceBass = document.querySelector('.tonalVarianceBass');

var psyBass = document.querySelector('.psyBass');
var acidSequence = document.querySelector('.acidSequence');
var acidSequential = document.querySelector('.acidSequential');

var filterSweep = document.querySelector('.filterSweep');
var randomizeWaveform = document.querySelector('.randomizeWaveform');

// stop

var stopVariance = document.querySelector('.stopVariance');

var pitchSlide;

//

// setPitch.onclick = function() {
//   pitchIncrement = document.querySelector('.pitchIncrement').value;
//   console.log(pitchIncrement);
// }

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

//

document.onmousemove = updatePage;

var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var CurX;
var CurY;

var randomizer1;
var randomizer2;

var maxFreq = 6000;
var maxVol = 0.02;

var mouseTrack = true;

var pitchTrack = true;

var gridlocked = true;

function updatePage(e) {

    if(mouseTrack) {
      KeyFlag = false;

      CurX = (window.Event) ? e.pageX : event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
      CurY = (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
      
      if(pitchTrack) {
        oscillator1.frequency.value = ( (CurX/WIDTH) * maxFreq / 4);
        oscillator2.frequency.value = ( (CurX/WIDTH) * (-1 * maxFreq) / 4);
      }
      randomizer1 = ( (CurX/WIDTH) * maxFreq / 4);
      randomizer2 = ( (CurX/WIDTH) * (-1 * maxFreq) / 4);

      gainNode.gain.value = .7 * maxVol;
    }
}

// BUTTON CLICK FUNCTIONS

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

//

stopVariance.onclick = function() {
  window.clearInterval(variance);
}