var tempoHalved = false;

// arpeggiate user's chord

var userNoteA;
var userNoteB;
var userNoteC;
var userNoteD;
var userNoteE;

var noteParser = function(note) {
  var parsedNote;

  if(note.indexOf("A") !== -1) {
    if (Math.random() < .5) {
      parsedNote = "AoctaveThree";
    } else {
      parsedNote = "AoctaveFour";
    }
  } else if ( (note.indexOf("B flat") !== -1) || (note.indexOf("A sharp") !== -1) || (note.indexOf("A#") !== -1) ) {
    parsedNote = "AsharpOctaveThree";
  } else if (note.indexOf("B") !== -1) {
    if (Math.random() < .5) {
      parsedNote = "BoctaveThree";
    } else {
      parsedNote = "BoctaveTwo";
    }
  } else if (note.indexOf("C") !== -1) {
    if (Math.random() < .5) {
      parsedNote = "CoctaveFour";
    } else {
      parsedNote = "CoctaveTwo";
    }
    
  } else if ( (note.indexOf("C sharp") !== -1) || (note.indexOf("D flat") !== -1) || (note.indexOf("C#") !== -1) ) {
    parsedNote = "CsharpOctaveFour";
  } else if (note.indexOf("D") !== -1) {
    if (Math.random() < .5) {
      parsedNote = "DoctaveFour";
    } else {
      parsedNote = "DoctaveThree";
    }
  } else if ( (note.indexOf("D sharp") !== -1) || (note.indexOf("E flat") !== -1) || (note.indexOf("D#") !== -1)  ) {
    parsedNote = "DsharpOctaveFour";
  } else if (note.indexOf("E") !== -1) {
    if (Math.random() < .5) {
      parsedNote = "EoctaveOne";
    } else {
      parsedNote = "EoctaveThree";
    }
  } else if (note.indexOf("F") !== -1) {
    if (Math.random() < .5) {
      parsedNote = "FoctaveThree";
    } else {
      parsedNote = "FoctaveFour";
    }
  } else if ( (note.indexOf("F sharp") !== -1) || (note.indexOf("G flat") !== -1) || (note.indexOf("F#") !== -1) ) {
    parsedNote = "FsharpOctaveFour";
  } else if (note.indexOf("G") !== -1) {
    if (Math.random() < .5) {
      parsedNote = "GoctaveTwo";
    } else {
      parsedNote = "GoctaveThree";
    }
  } else if ( (note.indexOf("A flat") !== -1) || (note.indexOf("G sharp") !== -1) || (note.indexOf("G#") !== -1) ) {
    parsedNote = "GsharpOctaveFour";
  } else {
    parsedNote = "CoctaveThree";
  }

  return parsedNote
}

var userArp = function() {

  if(userArpPlaying) {

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

      if(Math.random() < .25) {
        oscillator1.frequency.value = toneDictionary[userNoteC]
        oscillator2.frequency.value = toneDictionary[userNoteE]
        waveform2 = setTimeout(randomWaveFunc, tempo * 2);
        stepInSequence += 5;
        console.log("gate");
        waveform2 = setTimeout(gateFunc, tempo / 2);
        variance = setTimeout(userArp, tempo);
      } else if (Math.random() <.1) {
        oscillator1.frequency.value = toneDictionary[userNoteD]
        oscillator2.frequency.value = toneDictionary[userNoteA]
        gate = setTimeout(gateFunc, tempo * 2.5);
        waveform2 = setTimeout(gateFunc, tempo - (tempo / 2) );
        stepInSequence += 3;
        console.log("gate of death");
        variance = setTimeout(userArp, tempo);
      } else if(stepInSequence === 0) {
        if(Math.random() < .5) {
          oscillator1.frequency.value = toneDictionary[userNoteA]
          oscillator2.frequency.value = toneDictionary[userNoteB]
          waveform2 = setTimeout(randomWaveFunc, tempo * 2);
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
          waveform2 = setTimeout(randomWaveFunc, tempo * 2);
          oscillator1.frequency.value = toneDictionary[userNoteB]
          oscillator2.frequency.value = toneDictionary[userNoteC]
          stepInSequence += 1;
          variance = setTimeout(userArp, tempo);
        } else {
          oscillator1.frequency.value = toneDictionary[userNoteA]
          oscillator2.frequency.value = toneDictionary[userNoteD]
          stepInSequence -= 1;
          variance = setTimeout(userArp, tempo / 2);
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
          variance = setTimeout(userArp, tempo / 2);
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
          waveform2 = setTimeout(randomWaveFunc, tempo * 4);
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
          variance = setTimeout(userArp, tempo / 2);
        }
    
      } else if (stepInSequence === 6) {
        if(Math.random() < .5) {
          oscillator1.frequency.value = toneDictionary[userNoteB]
          oscillator2.frequency.value = toneDictionary[userNoteD]
          stepInSequence += 1;
          variance = setTimeout(userArp, tempo * 2);
        } else {
          oscillator1.frequency.value = toneDictionary[userNoteD]
          oscillator2.frequency.value = toneDictionary[userNoteA]
          stepInSequence -= 3;
          variance = setTimeout(userArp, tempo);
        }

      } else if ( Math.random() < .15 ) {
        waveform2 = setInterval(randomWaveFunc, tempo * 2);
        oscillator1.frequency.value = toneDictionary[userNoteC]
        oscillator2.frequency.value = toneDictionary[userNoteE]
        variance = setTimeout(userArp, tempo);
      } else if (tempoHalved) {
        waveform2 = setInterval(randomWaveFunc, tempo * 2);
        tempo = tempo / 2;
        tempoHalved = false;
        oscillator1.frequency.value = toneDictionary[userNoteC]
        oscillator2.frequency.value = toneDictionary[userNoteE]
        variance = setTimeout(userArp, tempo);
      } else if ( Math.random() < .15 ) {
        tempo = tempo * 2;
        tempoHalved = true;
        oscillator1.frequency.value = toneDictionary[userNoteE]
        oscillator2.frequency.value = toneDictionary.DsharpOctaveThree;
        variance = setTimeout(userArp, tempo);
      } else if (stepInSequence === 7) {
        oscillator1.frequency.value = toneDictionary[userNoteA]
        oscillator2.frequency.value = toneDictionary[userNoteE]
        stepInSequence = 0;
        if(Math.random() < .5) {
          variance = setTimeout(userArp, tempo / 2);
        } else {
          variance = setTimeout(userArp, tempo);
        }
          
      }
    }
  }
}