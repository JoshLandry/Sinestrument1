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