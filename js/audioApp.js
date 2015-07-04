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