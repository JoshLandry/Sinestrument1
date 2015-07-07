var cMajorScale = function() {
  pitchTrack = false;
  lowPassFilter.frequency.value = 3700 - (Math.random() * 1000);

  console.log(stepInSequence);

  if(stepInSequence > 7) {
    stepInSequence = 0;
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
        stepInSequence -= 1;
      }
      variance = setTimeout(cMajorScale, tempo);
    } else if (stepInSequence === 3) {
      oscillator1.frequency.value = toneDictionary.FoctaveTwo
      oscillator2.frequency.value = toneDictionary.FoctaveThree
      if(Math.random() < .5) {
        stepInSequence += 2;
      } else {
        stepInSequence -= 1;
      }
      variance = setTimeout(cMajorScale, tempo);
    } else if (stepInSequence === 4) {
      oscillator1.frequency.value = toneDictionary.GoctaveTwo
      oscillator2.frequency.value = toneDictionary.GoctaveThree
      if(Math.random() < .5) {
        stepInSequence += 2;
      } else {
        stepInSequence += 1;
      }
      variance = setTimeout(cMajorScale, tempo);
    } else if (stepInSequence === 5) {
      oscillator1.frequency.value = toneDictionary.AoctaveTwo
      oscillator2.frequency.value = toneDictionary.AoctaveThree
      if(Math.random() < .5) {
        stepInSequence += 2;
      } else {
        stepInSequence += 1;
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
