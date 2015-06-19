var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

var oscillator1 = audioCtx.createOscillator();
var oscillator2 = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();

oscillator1.connect(gainNode);
oscillator2.connect(gainNode);
gainNode.connect(audioCtx.destination);

//

var initialVol = 0.000;

//

oscillator1.type = 'sine';
oscillator1.frequency.value = 2200;
oscillator1.detune.value = 100;
oscillator1.start(0);

oscillator1.onended = function() {
  console.log('somehow, your tone has ended');
}

//

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
var stopVariance = document.querySelector('.stopVariance');

setPitch.onclick = function() {
  pitchIncrement = document.querySelector('.pitchIncrement').value;
  console.log(pitchIncrement);
}

raisePitch.onclick = function() {
  oscillator1.frequency.value += pitchIncrement;
  oscillator2.frequency.value += pitchIncrement;
}

lowerPitch.onclick = function() {
  oscillator1.frequency.value -= pitchIncrement;
  oscillator2.frequency.value -= pitchIncrement;
}

twistDownPitch.onclick = function() {
  oscillator1.frequency.value += pitchIncrement;
  oscillator2.frequency.value -= pitchIncrement;
}

twistUpPitch.onclick = function() {
  oscillator1.frequency.value -= pitchIncrement;
  oscillator2.frequency.value += pitchIncrement;
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
    } else {
      oscillator1.frequency.value -= 45;
    }

    if( (Math.random() > .5) ) {
      oscillator2.frequency.value -= 10;
    } else {
      oscillator2.frequency.value -= 50;
    }
  } else if ( Math.random() < .5) {
    oscillator1.frequency.value = oscillator1.frequency.value / 2
    oscillator2.frequency.value = oscillator2.frequency.value / 4
  } else {
    oscillator1.frequency.value = oscillator1.frequency.value / Math.random();
    oscillator2.frequency.value = oscillator2.frequency.value / Math.random();
  }
};

rapidVariance.onclick = function() {
  variance = setInterval(varianceFunc, 30);
}

hundredMsVariance.onclick = function() {
  variance = setInterval(varianceFunc, 100);
}

twoHundredMsVariance.onclick = function() {
  variance = setInterval(varianceFunc, 200);
}

function thousandMsVariance() {
  variance = setInterval(varianceFunc, 1000);
}

stopVariance.onclick = function() {
  window.clearInterval(variance);
}
