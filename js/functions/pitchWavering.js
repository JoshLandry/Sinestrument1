// constant variance

var variance;

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
    lowPassFilter.frequency.value = (Math.random() * 500);
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
    lowPassFilter.frequency.value = (Math.random() * 500);
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
    lowPassFilter.frequency.value = (Math.random() * 5000);
  } else {
    oscillator1.frequency.value = oscillator1.frequency.value / (Math.random() * 1.3);
    oscillator2.frequency.value = oscillator2.frequency.value * (Math.random() * .9);
    lowPassFilter.frequency.value = 1750;
  }
};