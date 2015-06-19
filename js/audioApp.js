var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

var oscillator1 = audioCtx.createOscillator();
var oscillator2 = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();

oscillator1.connect(gainNode);
oscillator2.connect(gainNode);
gainNode.connect(audioCtx.destination);

//

var initialVol = 0.010;

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