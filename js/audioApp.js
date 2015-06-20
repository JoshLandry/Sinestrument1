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
biquadFilter.gain.value = 25;

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

// pitch buttons

var pitchIncrement = 80;

var setPitch = document.querySelector('.setPitch');
var raisePitch = document.querySelector('.raisePitch');
var lowerPitch = document.querySelector('.lowerPitch');
var twistDownPitch = document.querySelector('.twistDownPitch');
var twistUpPitch = document.querySelector('.twistUpPitch');

var mouseTrackButton = document.querySelector('.mouseTrackButton');

var hundredMsVariance = document.querySelector('.hundredMsVariance');
var twoHundredMsVariance = document.querySelector('.twoHundredMsVariance');
var rapidVariance = document.querySelector('.rapidVariance');
var randomVariance = document.querySelector('.randomVariance');
var minuteVariance = document.querySelector('.minuteVariance');

var tonalVariance = document.querySelector('.tonalVariance');
var tonalVarianceScale = document.querySelector('.tonalVarianceScale');
var tonalVarianceBass = document.querySelector('.tonalVarianceBass');

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

setPitch.onclick = function() {
  pitchIncrement = document.querySelector('.pitchIncrement').value;
  console.log(pitchIncrement);
}

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

document.onmousemove = updatePage;

var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var CurX;
var CurY;

var maxFreq = 6000;
var maxVol = 0.02;

var mouseTrack = true;

function updatePage(e) {

    if(mouseTrack) {
      KeyFlag = false;

      CurX = (window.Event) ? e.pageX : event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
      CurY = (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
      
      oscillator1.frequency.value = ( (CurX/WIDTH) * maxFreq / 4);
      oscillator2.frequency.value = ( (CurX/WIDTH) * (-1 * maxFreq) / 4);
      gainNode.gain.value = (CurY/HEIGHT) * maxVol;
    }
}

// constant variance

var variance;

var varianceFunc = function() { 

  if( Math.random() < .3 ) {

    if( (Math.random() > .5) ) {
      oscillator1.frequency.value += 10;
      lowPassFilter.frequency.value = 4000;
    } else {
      oscillator1.frequency.value -= 45;
      lowPassFilter.frequency.value = 1700;
    }

    if( (Math.random() > .5) ) {
      oscillator2.frequency.value -= 10;
      lowPassFilter.frequency.value = 6000;
    } else {
      oscillator2.frequency.value -= 50;
      lowPassFilter.frequency.value = 3750;
    }
  } else if ( Math.random() < .5) {
    oscillator1.frequency.value = oscillator1.frequency.value / 2
    oscillator2.frequency.value = oscillator2.frequency.value / 4
    lowPassFilter.frequency.value = (Math.random * 500);
  } else {
    oscillator1.frequency.value = oscillator1.frequency.value / Math.random();
    oscillator2.frequency.value = oscillator2.frequency.value / Math.random();
    lowPassFilter.frequency.value = 1750;
  }
};

var varianceFunc2 = function() { 

  if( Math.random() < .3 ) {

    if( (Math.random() > .5) ) {
      oscillator1.frequency.value += 220;
      lowPassFilter.frequency.value = 4000;
    } else {
      oscillator1.frequency.value -= 220;
      lowPassFilter.frequency.value = 1700;
    }

    if( (Math.random() > .5) ) {
      oscillator2.frequency.value -= 110;
      lowPassFilter.frequency.value = 6000;
    } else {
      oscillator2.frequency.value += 110;
      lowPassFilter.frequency.value = 3750;
    }
  } else if ( Math.random() < .5) {
    oscillator1.frequency.value = oscillator1.frequency.value * 2
    oscillator2.frequency.value = oscillator2.frequency.value / 4
    lowPassFilter.frequency.value = (Math.random * 500);
  } else {
    oscillator1.frequency.value = oscillator1.frequency.value / (Math.random() * 6);
    oscillator2.frequency.value = oscillator2.frequency.value * (Math.random() * 4);
    lowPassFilter.frequency.value = 1750;
  }
};

var varianceFunc3 = function() { 

  if( Math.random() < .3 ) {

    if( (Math.random() > .5) ) {
      oscillator1.frequency.value += 5;
      lowPassFilter.frequency.value = 4000;
    } else {
      oscillator1.frequency.value -= 5;
      lowPassFilter.frequency.value = 1700;
    }

    if( (Math.random() > .5) ) {
      oscillator2.frequency.value -= 2;
      lowPassFilter.frequency.value = 6000;
    } else {
      oscillator2.frequency.value += 2;
      lowPassFilter.frequency.value = 3750;
    }
  } else if ( Math.random() < .5) {
    oscillator1.frequency.value = oscillator1.frequency.value * 1.3
    oscillator2.frequency.value = oscillator2.frequency.value / 1.1
    lowPassFilter.frequency.value = (Math.random * 500);
  } else {
    oscillator1.frequency.value = oscillator1.frequency.value / (Math.random() * 1.3);
    oscillator2.frequency.value = oscillator2.frequency.value * (Math.random() * .9);
    lowPassFilter.frequency.value = 1750;
  }
};

var tonalVarianceFunc1 = function() { 

  if( Math.random() < .3 ) {

    if( (Math.random() > .5) ) {
      oscillator1.frequency.value = 1879.69;
      lowPassFilter.frequency.value = 4000;
    } else {
      oscillator1.frequency.value = 1674.62;
      lowPassFilter.frequency.value = 1700;
    }

    if( (Math.random() > .5) ) {
      oscillator2.frequency.value = 1408.18;
      lowPassFilter.frequency.value = 6000;
    } else {
      oscillator2.frequency.value = 1254.55;
      lowPassFilter.frequency.value = 3750;
    }
  } else if ( Math.random() < .5) {
    oscillator1.frequency.value = 837.31
    oscillator2.frequency.value = 790.31
    lowPassFilter.frequency.value = (Math.random * 500);
  } else {
    oscillator1.frequency.value = 627.27
    oscillator2.frequency.value = 939.85
    lowPassFilter.frequency.value = 1750;
  }
};

var tonalVarianceFunc2 = function() { 

  if( Math.random() < .3 ) {

    if( (Math.random() > .5) ) {
      oscillator1.frequency.value = 790.31;
      lowPassFilter.frequency.value = 4000;
    } else {
      oscillator1.frequency.value = 627.27;
      lowPassFilter.frequency.value = 1700;
    }

    if( (Math.random() > .5) ) {
      oscillator2.frequency.value = 558.84;
      lowPassFilter.frequency.value = 6000;
    } else {
      oscillator2.frequency.value = 1054.94;
      lowPassFilter.frequency.value = 3750;
    }
  } else if ( Math.random() < .5) {
    oscillator1.frequency.value = 704.09
    oscillator2.frequency.value = 1408.08
    lowPassFilter.frequency.value = (Math.random * 500);
  } else {
    oscillator1.frequency.value = 627.27
    oscillator2.frequency.value = 1580.63
    lowPassFilter.frequency.value = 1750;
  }
};

var gate;

var gateFunc = function() {
  lowPassFilter.frequency.value = 0;
}

var tonalVarianceFunc3 = function() { 

  if( Math.random() < .8 ) {
    lowPassFilter.frequency.value = 2700;
  }

  gate = setTimeout(gateFunc, 175 );

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
    lowPassFilter.frequency.value = (Math.random * 2500);
  } else if ( Math.random() < .8) {
    oscillator1.frequency.value = 73.42 // D2
    oscillator2.frequency.value = 87.31 // F2
    lowPassFilter.frequency.value = (Math.random * 4500);
  } else {
    oscillator1.frequency.value = 196.00 // G2
    oscillator2.frequency.value = 49.00 // G1
    lowPassFilter.frequency.value = 1750;
  }
};

// atonal variances

rapidVariance.onclick = function() {
  variance = setInterval(varianceFunc, 30);
}

hundredMsVariance.onclick = function() {
  variance = setInterval(varianceFunc, 100);
}

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

tonalVariance.onclick = function() {
  variance = setInterval(tonalVarianceFunc1, 200);
}

tonalVarianceScale.onclick = function() {
  variance = setInterval(tonalVarianceFunc2, 200);
}

tonalVarianceBass.onclick = function() {
  variance = setInterval(tonalVarianceFunc3, 300);
}

//

stopVariance.onclick = function() {
  window.clearInterval(variance);
}
