var cMajorScale = function() {
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
  } else {
    waveform = setTimeout(randomWaveFunc, tempo / 2);
  }

  if(!randomized) {
    if(stepInSequence === 0) {
      oscillator1.frequency.value = toneDictionary.CoctaveTwo
      oscillator2.frequency.value = toneDictionary.CoctaveThree
      stepInSequence += 1;
      variance = setTimeout(cMajorScale, tempo);
    } else if (stepInSequence === 1) {
      oscillator1.frequency.value = toneDictionary.DoctaveTwo
      oscillator2.frequency.value = toneDictionary.DoctaveThree
      stepInSequence += 1;
      variance = setTimeout(cMajorScale, tempo);
    } else if (stepInSequence === 2) {
      oscillator1.frequency.value = toneDictionary.EoctaveTwo
      oscillator2.frequency.value = toneDictionary.EoctaveThree
      stepInSequence += 1;
      variance = setTimeout(cMajorScale, tempo);
    } else if (stepInSequence === 3) {
      oscillator1.frequency.value = toneDictionary.FoctaveTwo
      oscillator2.frequency.value = toneDictionary.FoctaveThree
      stepInSequence += 1;
      variance = setTimeout(cMajorScale, tempo);
    } else if (stepInSequence === 4) {
      oscillator1.frequency.value = toneDictionary.GoctaveTwo
      oscillator2.frequency.value = toneDictionary.GoctaveThree
      stepInSequence += 1;
      variance = setTimeout(cMajorScale, tempo);
    } else if (stepInSequence === 5) {
      oscillator1.frequency.value = toneDictionary.AoctaveTwo
      oscillator2.frequency.value = toneDictionary.AoctaveThree
      stepInSequence += 1;
      variance = setTimeout(cMajorScale, tempo);
    } else if (stepInSequence === 6) {
      oscillator1.frequency.value = toneDictionary.BoctaveTwo
      oscillator2.frequency.value = toneDictionary.BoctaveThree
      stepInSequence += 1;
      variance = setTimeout(cMajorScale, tempo);
    } else if (stepInSequence === 7) {
      oscillator1.frequency.value = toneDictionary.CoctaveThree
      oscillator2.frequency.value = toneDictionary.CoctaveFour
      stepInSequence = 0;
      variance = setTimeout(cMajorScale, tempo);
    }
  }

  if (randomized) {
    if(stepInSequence === 0) {
      oscillator1.frequency.value = toneDictionary.CoctaveTwo
      oscillator2.frequency.value = toneDictionary.CoctaveThree
      if(Math.random() < .5) {
        stepInSequence += 2;
      } else {
        stepInSequence += 1;
      }
      variance = setTimeout(cMajorScale, tempo);
    } else if (stepInSequence === 1) {
      oscillator1.frequency.value = toneDictionary.DoctaveTwo
      oscillator2.frequency.value = toneDictionary.DoctaveThree
      if(Math.random() < .5) {
        stepInSequence += 2;
      } else {
        stepInSequence += 1;
      }
      variance = setTimeout(cMajorScale, tempo);
    } else if (stepInSequence === 2) {
      oscillator1.frequency.value = toneDictionary.EoctaveTwo
      oscillator2.frequency.value = toneDictionary.EoctaveThree
      if(Math.random() < .5) {
        stepInSequence += 2;
      } else if (Math.random() < .3) {
        stepInSequence += 1;
      } else {
        stepInSequence -= 2;
      }
      variance = setTimeout(cMajorScale, tempo);
    } else if (stepInSequence === 3) {
      oscillator1.frequency.value = toneDictionary.FoctaveTwo
      oscillator2.frequency.value = toneDictionary.FoctaveThree
      if(Math.random() < .5) {
        stepInSequence += 2;
      } else if (Math.random() < .3) {
        stepInSequence -= 1;
      } else {
        stepInSequence += 1;
      }
      variance = setTimeout(cMajorScale, tempo);
    } else if (stepInSequence === 4) {
      oscillator1.frequency.value = toneDictionary.GoctaveTwo
      oscillator2.frequency.value = toneDictionary.GoctaveThree
      if(Math.random() < .5) {
        stepInSequence += 1;
      } else {
        stepInSequence -= 3;
      }
      variance = setTimeout(cMajorScale, tempo);
    } else if (stepInSequence === 5) {
      oscillator1.frequency.value = toneDictionary.AoctaveTwo
      oscillator2.frequency.value = toneDictionary.AoctaveThree
      if(Math.random() < .5) {
        stepInSequence += 1;
      } else {
        stepInSequence += 2;
      }
      variance = setTimeout(cMajorScale, tempo);
    } else if (stepInSequence === 6) {
      oscillator1.frequency.value = toneDictionary.BoctaveTwo
      oscillator2.frequency.value = toneDictionary.BoctaveThree
      if(Math.random() < .5) {
        stepInSequence += 2;
      } else {
        stepInSequence += 1;
      }
      variance = setTimeout(cMajorScale, tempo);
    } else if (stepInSequence === 7) {
      oscillator1.frequency.value = toneDictionary.CoctaveThree
      oscillator2.frequency.value = toneDictionary.CoctaveFour
      if(Math.random() < .5) {
        stepInSequence += 2;
      } else {
        stepInSequence += 1;
      }
      variance = setTimeout(cMajorScale, tempo);
    }
  }

  if(patternLength === 2) {
    if (counter === 7) {
      counter = 0;
      stepInSequence = 0;
    } 
  } else if (patternLength === 1) {
    if (counter === 3) {
      counter = 0;
      stepInSequence = 0;
    }
  } else if (patternLength === 4) {
    if (counter === 15) {
      counter = 0;
      stepInSequence = 0;
    }
  }
}


var lydianMode = function() {

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
  } else {
    waveform = setTimeout(randomWaveFunc, tempo / 2);
  }

  if(!randomized) {
    if(stepInSequence === 0) {
      oscillator1.frequency.value = toneDictionary.FoctaveThree
      oscillator2.frequency.value = toneDictionary.AoctaveTwo
      stepInSequence += 1;
      variance = setTimeout(lydianMode, tempo);
    } else if (stepInSequence === 1) {
      oscillator1.frequency.value = toneDictionary.GoctaveThree
      oscillator2.frequency.value = toneDictionary.BoctaveTwo
      stepInSequence += 1;
      variance = setTimeout(lydianMode, tempo);
    } else if (stepInSequence === 2) {
      oscillator1.frequency.value = toneDictionary.AoctaveThree
      oscillator2.frequency.value = toneDictionary.CoctaveTwo
      stepInSequence += 1;
      variance = setTimeout(lydianMode, tempo);
    } else if (stepInSequence === 3) {
      oscillator1.frequency.value = toneDictionary.BoctaveThree
      oscillator2.frequency.value = toneDictionary.DoctaveTwo
      stepInSequence += 1;
      variance = setTimeout(lydianMode, tempo);
    } else if (stepInSequence === 4) {
      oscillator1.frequency.value = toneDictionary.CoctaveThree
      oscillator2.frequency.value = toneDictionary.EoctaveTwo
      stepInSequence += 1;
      variance = setTimeout(lydianMode, tempo);
    } else if (stepInSequence === 5) {
      oscillator1.frequency.value = toneDictionary.DoctaveThree
      oscillator2.frequency.value = toneDictionary.CoctaveTwo
      stepInSequence += 1;
      variance = setTimeout(lydianMode, tempo);
    } else if (stepInSequence === 6) {
      oscillator1.frequency.value = toneDictionary.FoctaveThree
      oscillator2.frequency.value = toneDictionary.BoctaveTwo
      stepInSequence += 1;
      variance = setTimeout(lydianMode, tempo);
    } else if (stepInSequence === 7) {
      oscillator1.frequency.value = toneDictionary.GoctaveThree
      oscillator2.frequency.value = toneDictionary.AoctaveTwo
      stepInSequence = 0;
      variance = setTimeout(lydianMode, tempo);
    }
  } else if (randomized) {
    if(stepInSequence === 0) {
      oscillator1.frequency.value = toneDictionary.FoctaveThree
      oscillator2.frequency.value = toneDictionary.AoctaveTwo
      
      if( Math.random() < .5) {
        stepInSequence += 1;
      } else {
        stepInSequence += 2;
      }
      
      variance = setTimeout(lydianMode, tempo);
    } else if (stepInSequence === 1) {
      oscillator1.frequency.value = toneDictionary.GoctaveThree
      oscillator2.frequency.value = toneDictionary.BoctaveTwo

      if( (randomizer1 / 500) < .3) {
        stepInSequence += 4;
      } else {
        stepInSequence += 1;
      }

      variance = setTimeout(lydianMode, tempo);
    } else if (stepInSequence === 2) {
      oscillator1.frequency.value = toneDictionary.AoctaveThree
      oscillator2.frequency.value = toneDictionary.CoctaveTwo

      if( Math.random() < .5) {
        stepInSequence += 1;
      } else {
        stepInSequence += 2;
      }

      variance = setTimeout(lydianMode, tempo);
    } else if (stepInSequence === 3) {
      oscillator1.frequency.value = toneDictionary.BoctaveThree
      oscillator2.frequency.value = toneDictionary.DoctaveTwo

      if ((randomizer1 / 1000) <.3) {
        stepInSequence -= 1;
      } else {
        stepInSequence += 1;
      }

      variance = setTimeout(lydianMode, tempo);
    } else if (stepInSequence === 4) {
      oscillator1.frequency.value = toneDictionary.CoctaveThree
      oscillator2.frequency.value = toneDictionary.EoctaveTwo
      if( Math.random() < .5) {
        stepInSequence += 1;
      } else {
        stepInSequence += 2;
      }
      variance = setTimeout(lydianMode, tempo);
    } else if (stepInSequence === 5) {
      oscillator1.frequency.value = toneDictionary.DoctaveThree
      oscillator2.frequency.value = toneDictionary.CoctaveTwo

      if (( (randomizer2 * -1) / 1000) <.6) {
        stepInSequence -= 2;
      } else {
        stepInSequence += 1;
      }
    
      variance = setTimeout(lydianMode, tempo);
    } else if (stepInSequence === 6) {
      oscillator1.frequency.value = toneDictionary.FoctaveThree
      oscillator2.frequency.value = toneDictionary.BoctaveTwo
      if( Math.random() < .5) {
        stepInSequence += 1;
      } else {
        stepInSequence -= 2;
      }
      variance = setTimeout(lydianMode, tempo);
    } else if (stepInSequence === 7) {
      oscillator1.frequency.value = toneDictionary.GoctaveThree
      oscillator2.frequency.value = toneDictionary.AoctaveTwo
      if((randomizer1 / 1000) <.7) {
        stepInSequence -= 2;
      } else {
        stepInSequence = 0;
      }
      variance = setTimeout(lydianMode, tempo);
    }
  }
}

var locrianMode = function() {

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

  waveform2 = setTimeout(gateFunc, tempo / randomizer1 * 70);

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

  if(stepInSequence === 0) {
    oscillator1.frequency.value = toneDictionary.BoctaveThree
    oscillator2.frequency.value = toneDictionary.DoctaveTwo
    stepInSequence += 1;
    variance = setTimeout(locrianMode, tempo);
  } else if (stepInSequence === 1) {
    oscillator1.frequency.value = toneDictionary.CoctaveThree
    oscillator2.frequency.value = toneDictionary.EoctaveTwo
    stepInSequence += 1;
    variance = setTimeout(locrianMode, tempo);
  } else if (stepInSequence === 2) {
    oscillator1.frequency.value = toneDictionary.DoctaveThree
    oscillator2.frequency.value = toneDictionary.FoctaveTwo
    stepInSequence += 1;
    variance = setTimeout(locrianMode, tempo);
  } else if (stepInSequence === 3) {
    oscillator1.frequency.value = toneDictionary.EoctaveThree
    oscillator2.frequency.value = toneDictionary.GoctaveTwo
    stepInSequence += 1;
    variance = setTimeout(locrianMode, tempo);
  } else if (stepInSequence === 4) {
    oscillator1.frequency.value = toneDictionary.FoctaveThree
    oscillator2.frequency.value = toneDictionary.FoctaveTwo
    stepInSequence += 1;
    variance = setTimeout(locrianMode, tempo);
  } else if (stepInSequence === 5) {
    oscillator1.frequency.value = toneDictionary.GoctaveThree
    oscillator2.frequency.value = toneDictionary.EoctaveTwo
    stepInSequence += 1;
    variance = setTimeout(locrianMode, tempo);
  } else if (stepInSequence === 6) {
    oscillator1.frequency.value = toneDictionary.AoctaveThree
    oscillator2.frequency.value = toneDictionary.DoctaveTwo
    stepInSequence += 1;
    variance = setTimeout(locrianMode, tempo);
  } else if (stepInSequence === 7) {
    oscillator1.frequency.value = toneDictionary.BoctaveFour
    oscillator2.frequency.value = toneDictionary.CoctaveTwo
    stepInSequence = 0;
    variance = setTimeout(locrianMode, tempo);
  }
}

// var scaleTemplate = function() {

//   if(stepInSequence === 0) {
//     oscillator1.frequency.value = 
//     oscillator2.frequency.value = 
//     stepInSequence += 1;
//     variance = setTimeout( , tempo);
//   } else if (stepInSequence === 1) {
//     oscillator1.frequency.value = 
//     oscillator2.frequency.value = 
//     stepInSequence += 1;
//     variance = setTimeout( , tempo);
//   } else if (stepInSequence === 2) {
//     oscillator1.frequency.value = 
//     oscillator2.frequency.value = 
//     stepInSequence += 1;
//     variance = setTimeout( , tempo);
//   } else if (stepInSequence === 3) {
//     oscillator1.frequency.value = 
//     oscillator2.frequency.value = 
//     stepInSequence += 1;
//     variance = setTimeout( , tempo);
//   } else if (stepInSequence === 4) {
//     oscillator1.frequency.value = 
//     oscillator2.frequency.value = 
//     stepInSequence += 1;
//     variance = setTimeout( , tempo);
//   } else if (stepInSequence === 5) {
//     oscillator1.frequency.value = 
//     oscillator2.frequency.value = 
//     stepInSequence += 1;
//     variance = setTimeout( , tempo);
//   } else if (stepInSequence === 6) {
//     oscillator1.frequency.value = 
//     oscillator2.frequency.value = 
//     stepInSequence += 1;
//     variance = setTimeout( , tempo);
//   } else if (stepInSequence === 7) {
//     oscillator1.frequency.value = 
//     oscillator2.frequency.value = 
//     stepInSequence = 0;
//     variance = setTimeout( , tempo);
//   }
// }
