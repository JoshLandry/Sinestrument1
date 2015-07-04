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

var slideUp = function () {
  oscillator1.frequency.value += pitchIncrement;
  oscillator2.frequency.value += pitchIncrement;
}

var slideDown = function() {
  oscillator1.frequency.value -= pitchIncrement;
  oscillator2.frequency.value -= pitchIncrement;
}

var twistUp = function() {
  oscillator1.frequency.value += pitchIncrement;
  oscillator2.frequency.value -= pitchIncrement;
}

var twistDown = function() {
  oscillator1.frequency.value -= pitchIncrement;
  oscillator2.frequency.value += pitchIncrement;
}

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

// tempo150.onclick = function() {
//   tempo = 150;
// }

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

var gate;

var gateFunc = function() {
  lowPassFilter.frequency.value = 0;
}

var tonalVarianceFunc3 = function() { 

  pitchTrack = false;
  if( Math.random() < .7 ) {
    lowPassFilter.frequency.value = 3000;
  }

  if (Math.random() < .5) {
    gate = setTimeout(gateFunc, 115 );
  } else if (Math.random() <.5) {
    gate = setTimeout(gateFunc, 175);
  } else {
    gate = setTimeout(gateFunc, 235);
  }

  if( Math.random() < .25) {
    variance = setTimeout(tonalVarianceFunc3, 150);
  }

  if( Math.random() < .3 ) {
    lowPassFilter.frequency.value = Math.random() * 100;
  } else if( Math.random() < .5 ) {

    if( (Math.random() > .5) ) {
      oscillator1.frequency.value = 110.00; // A3
      lowPassFilter.frequency.value = 1700;
    } else if ( (Math.random() < .9) ) {
      oscillator1.frequency.value = 87.31; // F2
      lowPassFilter.frequency.value = 4000;
    } else {
      oscillator1.frequency.value = 43.65; // F1
      lowPassFilter.frequency.value = 4000;
    }

    if( (Math.random() > .5) ) {
      oscillator2.frequency.value = 123.47; // B3
      lowPassFilter.frequency.value = 6000;
    } else if (Math.random() < .7) {
      oscillator2.frequency.value = 130.81; // C3
      lowPassFilter.frequency.value = 3750;
    } else {
      oscillator2.frequency.value = 146.83; // D3
      lowPassFilter.frequency.value = 3750;
    }

    if( (Math.random() < .1) ) {
      oscillator1.frequency.value = 196.00 // G2
      oscillator2.frequency.value = 49.00 // G1
      lowPassFilter.frequency.value = 1750;
    }

  } else if ( Math.random() < .5) {
    oscillator1.frequency.value = 87.31 // G2
    oscillator2.frequency.value = 174.61 // F3
    lowPassFilter.frequency.value = (Math.random() * 2500);
  } else if ( Math.random() < .8) {
    oscillator1.frequency.value = 73.42 // D2
    oscillator2.frequency.value = 87.31 // F2
    lowPassFilter.frequency.value = (Math.random() * 4500);
  } else {
    oscillator1.frequency.value = 196.00 // G2
    oscillator2.frequency.value = 49.00 // G1
    lowPassFilter.frequency.value = 1750;
  }

  waveform = setTimeout(randomWaveFunc, 300);
};

var waveform;
var repeatingPattern;

// sequences

var psyBassFunc = function () {

  pitchTrack = false;
  oscillator1.frequency.value = 196.00 // G2
  oscillator2.frequency.value = 49.00 // G1
  lowPassFilter.frequency.value = 3700 - (Math.random() * 1000);

  // if (Math.random() < .3) {
  //   gate = setTimeout(gateFunc, 140);
  // } else if (Math.random() <.3) {
  //   gate = setTimeout(gateFunc, 150);
  //   lowPassFilter.frequency.value = 2000;
  // } else if (Math.random() <.3) {
  //   gate = setTimeout(gateFunc, 105);
  //   oscillator2.frequency.value = 123.47 // B3
  // } else if (Math.random() <.6) {
  //   gate = setTimeout(gateFunc, 190);
  //   oscillator2.frequency.value = 130.81; // C3
  // } else if (Math.random() <.7) {
  //   oscillator2.frequency.value = 146.83; // D3
  // } else {  
  //   gate = setTimeout(gateFunc, 215);
  //   oscillator1.frequency.value = 110.00; // A3
  // }

  if ( Math.random() <.3 ) {
    gate = setTimeout(gateFunc, 175);
    lowPassFilter.frequency.value = 2000;
    console.log("B"); 
  } else if ( (randomizer1 / 500) < .3) {
    gate = setTimeout(gateFunc, 140);
    console.log("A");
  } else if ((randomizer1 / 1000) <.3) {
    gate = setTimeout(gateFunc, 105);
    oscillator2.frequency.value = 123.47 // B3
    console.log("C");
  } else if (( (randomizer2 * -1) / 1000) <.6) {
    gate = setTimeout(gateFunc, 190);
    oscillator2.frequency.value = 130.81; // C3
    console.log("D");
  } else if ((randomizer1 / 1000) <.7) {
    oscillator2.frequency.value = 146.83; // D3
    console.log("E");
  } else {  
    if (Math.random() < .5) {
      gate = setTimeout(gateFunc, 215);
    } else {
      gate = setTimeout(gateFunc, 175);
    }
    oscillator1.frequency.value = 110.00; // A3
    console.log("F");
  }

  waveform = setTimeout(randomWaveFunc, 150);

  if(Math.random() < .1) {
  repeatingPattern = setTimeout(noteSubdivision, 150);
  }
}

var noteSubdivision = function() {
  
  if( (randomizer1 / 500) < .5) {
    oscillator1.frequency.value = 196.00; // G3
    console.log("sub A");
  } else {
    oscillator1.frequency.value = 87.31; // F2
    console.log("sub B");
  }
}

var acidseq2 = function () {

  pitchTrack = false;
  lowPassFilter.frequency.value = 3700 - (Math.random() * 1000);
  waveform = setTimeout(randomWaveFunc, 400);
  oscillator1.frequency.value = toneDictionary.BoctaveOne;
  oscillator2.frequency.value = toneDictionary.DsharpOctaveOne;

  if ( Math.random() <.3 ) {
    oscillator1.frequency.value = toneDictionary.BoctaveOne;
    lowPassFilter.frequency.value = 2000;

    if (Math.random() < .5) {
          gate = setTimeout(gateFunc, 215);
        } else {
          gate = setTimeout(gateFunc, 175);
        }

    console.log("B"); 
  } else if ( (randomizer1 / 500) < .3) {
    oscillator1.frequency.value = toneDictionary.DsharpOctaveOne;
    gate = setTimeout(gateFunc, 140);
    console.log("A");
  } else if ((randomizer1 / 1000) <.3) {
    gate = setTimeout(gateFunc, 105);
    oscillator1.frequency.value = toneDictionary.BoctaveOne;
    oscillator2.frequency.value = toneDictionary.FsharpOctaveOne;
    console.log("C");
  } else if (( (randomizer2 * -1) / 1000) <.6) {
    gate = setTimeout(gateFunc, 190);
    oscillator1.frequency.value = toneDictionary.AoctaveOne;
    oscillator2.frequency.value = toneDictionary.BoctaveOne;
    console.log("D");
  } else if ((randomizer1 / 1000) <.7) {
    oscillator1.frequency.value = toneDictionary.BoctaveOne;
    oscillator2.frequency.value = toneDictionary.BoctaveTwo;
    console.log("E");
  } else {  
    if (Math.random() < .5) {
      gate = setTimeout(gateFunc, 215);
    } else {
      gate = setTimeout(gateFunc, 175);
    }
    oscillator1.frequency.value = toneDictionary.DsharpOctaveTwo;
    oscillator2.frequency.value = toneDictionary.DsharpOctaveOne;
    console.log("F");
  }

  if(Math.random() < .1 ) {
    lowPassFilter.frequency.value = (Math.random() * 1000);
  }

}

var stepInSequence = 0;

var tempo = 300;

var acidSequentialFunc = function() {
  pitchTrack = false;
  lowPassFilter.frequency.value = 3700 - (Math.random() * 1000);
  

  console.log(stepInSequence);

  if(gridlocked){

    if( Math.random() < .5 ) {
      waveform = setTimeout(randomWaveFunc, 300);
    } else {
      waveform = setTimeout(randomWaveFunc, 450);
    }
    
    if(stepInSequence === 0 ) {
      oscillator1.frequency.value = toneDictionary.BoctaveThree;
      oscillator2.frequency.value = toneDictionary.BoctaveTwo;
      stepInSequence += 1;
      variance = setTimeout(acidSequentialFunc, tempo);
    } else if (stepInSequence === 1) {
      oscillator1.frequency.value = toneDictionary.DsharpOctaveThree;
      stepInSequence += 1;
      variance = setTimeout(acidSequentialFunc, tempo);
    } else if (stepInSequence === 2) {
      oscillator1.frequency.value = toneDictionary.FsharpOctaveThree;
      oscillator2.frequency.value = toneDictionary.BoctaveThree;
      oscillator1.type = "sawtooth";
      stepInSequence += 1;

      if( Math.random() < .5 ) {
        lowPassFilter.frequency.value = Math.random() * 4000;
      } else {
        lowPassFilter.frequency.value = Math.random() * 2000;
      }

      variance = setTimeout(acidSequentialFunc, tempo * 2);
    } else if (stepInSequence === 3) {
      oscillator1.frequency.value = toneDictionary.FsharpOctaveTwo;

      if( Math.random() < .5 ) {
        oscillator2.frequency.value = toneDictionary.DsharpOctaveThree;
      } else {
        lowPassFilter.frequency.value = Math.random() * 4000;
      }

      stepInSequence += 1;
      variance = setTimeout(acidSequentialFunc, tempo);
    } else if (stepInSequence === 4) { 
      oscillator1.frequency.value = toneDictionary.AoctaveOne;
      oscillator2.frequency.value = toneDictionary.BoctaveTwo;
      stepInSequence += 1;
      variance = setTimeout(acidSequentialFunc, tempo);
    } else if (stepInSequence === 5) {
      oscillator1.frequency.value = toneDictionary.BoctaveOne;
      oscillator2.frequency.value = toneDictionary.BoctaveThree;

      if (Math.random() < .3) {
        oscillator2.frequency.value = toneDictionary.CoctaveThree;
      }

      stepInSequence = 0;
      variance = setTimeout(acidSequentialFunc, tempo);
    }

  } else {

    waveform = setTimeout(randomWaveFunc, 200);

    if(stepInSequence === 0 ) {
      oscillator1.frequency.value = toneDictionary.BoctaveThree;
      oscillator2.frequency.value = toneDictionary.BoctaveTwo;
      stepInSequence += 1;
      variance = setTimeout(acidSequentialFunc, ( Math.floor(Math.random() * 1000) ));
    } else if (stepInSequence === 1) {
      oscillator1.frequency.value = toneDictionary.DsharpOctaveThree;
      stepInSequence += 1;
      variance = setTimeout(acidSequentialFunc, ( Math.floor(Math.random() * 1000) ));
    } else if (stepInSequence === 2) {
      oscillator1.frequency.value = toneDictionary.FsharpOctaveThree;
      oscillator2.frequency.value = toneDictionary.BoctaveThree;
      stepInSequence += 1;
      variance = setTimeout(acidSequentialFunc, ( Math.floor(Math.random() * 1000) ));
    } else if (stepInSequence === 3) {
      oscillator1.frequency.value = toneDictionary.FsharpOctaveTwo;
      stepInSequence += 1;
      variance = setTimeout(acidSequentialFunc, ( Math.floor(Math.random() * 1000) ));
    } else if (stepInSequence === 4) { 
      oscillator1.frequency.value = toneDictionary.AoctaveOne;
      oscillator2.frequency.value = toneDictionary.BoctaveTwo;
      stepInSequence += 1;
      variance = setTimeout(acidSequentialFunc, ( Math.floor(Math.random() * 1000) ));
    } else if (stepInSequence === 5) {
      oscillator1.frequency.value = toneDictionary.BoctaveOne;
      oscillator2.frequency.value = toneDictionary.BoctaveThree;
      stepInSequence = 0;
      variance = setTimeout(acidSequentialFunc, ( Math.floor(Math.random() * 1000) ));
    }
  }

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

// tonalVariance.onclick = function() {
//   variance = setInterval(tonalVarianceFunc1, 200);
// }

// tonalVarianceScale.onclick = function() {
//   variance = setInterval(tonalVarianceFunc2, 200);
// }

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