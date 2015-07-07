var userArp = function() {

  pitchTrack = false;
  lowPassFilter.frequency.value = 3700 - (Math.random() * 1000);

  console.log(stepInSequence);
  counter += 1;

  if(stepInSequence > 7) {
    stepInSequence = 0;
  }

  if(!gridlocked) {
    tempo = Math.random() * 800;
  }

  if( Math.random() < .5 ) {
    waveform = setTimeout(randomWaveFunc, tempo);
  } else if ( Math.random() < .5 ) {
    waveform = setTimeout(randomWaveFunc, tempo * 2);
  } else if ( Math.random() < .5) {
    waveform = setTimeout(randomWaveFunc, tempo / 2);
  } else {
    waveform = setTimeout(randomWaveFunc, tempo / 4);
    waveform2 = setTimeout(gateFunc, tempo - (tempo / 4) );
  }
  if(!randomized) {
    if(stepInSequence === 0) {
      oscillator1.frequency.value = toneDictionary[userNoteA]
      oscillator2.frequency.value = toneDictionary[userNoteB]
      stepInSequence += 1;
      variance = setTimeout(userArp, tempo);
    } else if (stepInSequence === 1) {
      oscillator1.frequency.value = toneDictionary[userNoteB]
      oscillator2.frequency.value = toneDictionary[userNoteC]
      stepInSequence += 1;
      variance = setTimeout(userArp, tempo);
    } else if (stepInSequence === 2) {
      oscillator1.frequency.value = toneDictionary[userNoteC]
      oscillator2.frequency.value = toneDictionary[userNoteB]
      stepInSequence += 1;
      variance = setTimeout(userArp, tempo);
    } else if (stepInSequence === 3) {
      oscillator1.frequency.value = toneDictionary[userNoteD]
      oscillator2.frequency.value = toneDictionary[userNoteA]
      stepInSequence += 1;
      variance = setTimeout(userArp, tempo);
    } else if (stepInSequence === 4) {
      oscillator1.frequency.value = toneDictionary[userNoteE]
      oscillator2.frequency.value = toneDictionary[userNoteB]
      stepInSequence += 1;
      variance = setTimeout(userArp, tempo);
    } else if (stepInSequence === 5) {
      oscillator1.frequency.value = toneDictionary[userNoteC]
      oscillator2.frequency.value = toneDictionary[userNoteC]
      stepInSequence += 1;
      variance = setTimeout(userArp, tempo);
    } else if (stepInSequence === 6) {
      oscillator1.frequency.value = toneDictionary[userNoteB]
      oscillator2.frequency.value = toneDictionary[userNoteD]
      stepInSequence += 1;
      variance = setTimeout(userArp, tempo);
    } else if (stepInSequence === 7) {
      oscillator1.frequency.value = toneDictionary[userNoteA]
      oscillator2.frequency.value = toneDictionary[userNoteE]
      stepInSequence = 0;
      variance = setTimeout(userArp, tempo);
    }
  } else if (randomized) {
    if(stepInSequence === 0) {
      if(Math.random() < .5) {
        oscillator1.frequency.value = toneDictionary[userNoteA]
        oscillator2.frequency.value = toneDictionary[userNoteB]
        stepInSequence += 1;
        variance = setTimeout(userArp, tempo);
      } else {
        oscillator1.frequency.value = toneDictionary[userNoteA]
        oscillator2.frequency.value = toneDictionary[userNoteC]
        stepInSequence += 2;
        variance = setTimeout(userArp, tempo);
      }
    } else if (stepInSequence === 1) {
      if(Math.random() < .5) {
        oscillator1.frequency.value = toneDictionary[userNoteB]
        oscillator2.frequency.value = toneDictionary[userNoteC]
        stepInSequence += 1;
        variance = setTimeout(userArp, tempo);
      } else {
        oscillator1.frequency.value = toneDictionary[userNoteA]
        oscillator2.frequency.value = toneDictionary[userNoteD]
        stepInSequence -= 1;
        variance = setTimeout(userArp, tempo);
      }

    } else if (stepInSequence === 2) {
      if(( (randomizer1 / 500) < .3)) {
        oscillator1.frequency.value = toneDictionary[userNoteC]
        oscillator2.frequency.value = toneDictionary[userNoteB]
        stepInSequence += 1;
        variance = setTimeout(userArp, tempo);
      } else {
        oscillator1.frequency.value = toneDictionary[userNoteB]
        oscillator2.frequency.value = toneDictionary[userNoteE]
        stepInSequence += 1;
        variance = setTimeout(userArp, tempo * 2);
      }
        
    } else if (stepInSequence === 3) {
      if ( (randomizer1 / 1000) <.3) {
        oscillator1.frequency.value = toneDictionary[userNoteD]
        oscillator2.frequency.value = toneDictionary[userNoteA]
        stepInSequence += 1;
        variance = setTimeout(userArp, tempo);
      } else {
        oscillator1.frequency.value = toneDictionary[userNoteE]
        oscillator2.frequency.value = toneDictionary[userNoteB]
        stepInSequence += 2;
        variance = setTimeout(userArp, tempo);
      }

    } else if (stepInSequence === 4) {

      if (( (randomizer2 * -1) / 1000) <.6) {
        oscillator1.frequency.value = toneDictionary[userNoteE]
        oscillator2.frequency.value = toneDictionary[userNoteB]
        stepInSequence += 1;
        variance = setTimeout(userArp, tempo);
      } else {
        oscillator1.frequency.value = toneDictionary[userNoteC]
        oscillator2.frequency.value = toneDictionary[userNoteA]
        stepInSequence -= 2;
        variance = setTimeout(userArp, tempo);
      }
   
    } else if (stepInSequence === 5) {

      if ((randomizer1 / 1000) <.7) {
        oscillator1.frequency.value = toneDictionary[userNoteC]
        oscillator2.frequency.value = toneDictionary[userNoteC]
        stepInSequence += 1;
        variance = setTimeout(userArp, tempo);
      } else {
        oscillator1.frequency.value = toneDictionary[userNoteB]
        oscillator2.frequency.value = toneDictionary[userNoteD]
        stepInSequence += 2;
        variance = setTimeout(userArp, tempo);
      }
  
    } else if (stepInSequence === 6) {
      if(Math.random() < .5) {
        oscillator1.frequency.value = toneDictionary[userNoteB]
        oscillator2.frequency.value = toneDictionary[userNoteD]
        stepInSequence += 1;
        variance = setTimeout(userArp, tempo);
      } else {
        oscillator1.frequency.value = toneDictionary[userNoteD]
        oscillator2.frequency.value = toneDictionary[userNoteA]
        stepInSequence -= 3;
        variance = setTimeout(userArp, tempo);
      }

    } else if (stepInSequence === 7) {
      oscillator1.frequency.value = toneDictionary[userNoteA]
      oscillator2.frequency.value = toneDictionary[userNoteE]
      stepInSequence = 0;
      variance = setTimeout(userArp, tempo);
    }
  }
}