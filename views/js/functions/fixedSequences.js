var waveform;

var tonalVarianceFunc3 = function() { 

  if(bedroomIDMPlaying) {

    pitchTrack = false;
    if( Math.random() < .7 ) {
      lowPassFilter.frequency.value = 3000;
    }

    if (Math.random() < .5) {
      gate = setTimeout(gateFunc, tempo * .3834);
    } else if (Math.random() <.5) {
      gate = setTimeout(gateFunc, tempo * .5833);
    } else {
      gate = setTimeout(gateFunc, tempo * .7833);
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

    variance = setTimeout(tonalVarianceFunc3, tempo);
    waveform = setTimeout(randomWaveFunc, tempo);
  }
};

var acidSequentialFunc = function() {

  if(easternLoopPlaying) {

    pitchTrack = false;
    lowPassFilter.frequency.value = 3700 - (Math.random() * 1000);
    
    console.log(stepInSequence);

    if(gridlocked){

      if( Math.random() < .5 ) {
        waveform = setTimeout(randomWaveFunc, tempo * 1.5);
      } else {
        waveform = setTimeout(randomWaveFunc, tempo * 2);
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
}