document.onmousemove = updatePage;

var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var CurX;
var CurY;

var randomizer1;
var randomizer2;

function updatePage(e) {

    if(mouseTrack) {
      KeyFlag = false;

      CurX = (window.Event) ? e.pageX : event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
      CurY = (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
      
      if(pitchTrack) {
        oscillator1.frequency.value = ( (CurX/WIDTH) * maxFreq / 4);
        oscillator2.frequency.value = ( (CurX/WIDTH) * (-1 * maxFreq) / 4);

        pwmOsc.osc1.frequency.value = ( (CurX/WIDTH) * maxFreq / 4);
        pwmOsc.osc2.frequency.value = ( (CurX/WIDTH) * (-1 * maxFreq) / 4);
      }
      randomizer1 = ( (CurX/WIDTH) * maxFreq / 4);
      randomizer2 = ( (CurX/WIDTH) * (-1 * maxFreq) / 4);

      gainNode.gain.value = .7 * maxVol;
    }
}