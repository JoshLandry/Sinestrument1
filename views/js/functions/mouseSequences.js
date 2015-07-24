var noteSubdivision = function() {
  
  if( (randomizer1 / 500) < .5) {
    oscillator1.frequency.value = 196.00; // G3
    console.log("sub A");
  } else {
    oscillator1.frequency.value = 87.31; // F2
    console.log("sub B");
  }
}

var psyBassFunc = function () {

  if (acidBassArp1Playing) {

    pitchTrack = false;
    oscillator1.frequency.value = 196.00 // G2
    oscillator2.frequency.value = 49.00 // G1
    lowPassFilter.frequency.value = 3700 - (Math.random() * 1000);

    if(!gridlocked) {
      tempo = Math.random() * 600;
    } else {
    }

    if (randomized && ( Math.random() < .5) ) {
      if ( Math.random() < .3 ) {
        gate = setTimeout(gateFunc, tempo * .933);
        variance = setTimeout(psyBassFunc, tempo);
        console.log("new option");
      } else if (Math.random() <.3) {
        gate = setTimeout(gateFunc, tempo);
        lowPassFilter.frequency.value = 2000;
        console.log("new option");
        variance = setTimeout(psyBassFunc, tempo);
      } else if (Math.random() <.3) {
        gate = setTimeout(gateFunc, tempo * 7);
        oscillator2.frequency.value = toneDictionary.BoctaveFour;
        console.log("new option");
        variance = setTimeout(psyBassFunc, tempo);
      } else if (Math.random() <.6) {
        gate = setTimeout(gateFunc, tempo * 1.267);
        oscillator2.frequency.value = toneDictionary.CoctaveTwo;
        console.log("new option");
        variance = setTimeout(psyBassFunc, tempo);
      } else if (Math.random() <.7) {
        oscillator2.frequency.value = toneDictionary.DoctaveThree;
        console.log("new option");
        variance = setTimeout(psyBassFunc, tempo);
      } else {  
        gate = setTimeout(gateFunc, tempo * 1.433);
        oscillator1.frequency.value = toneDictionary.AoctaveThree;
        console.log("new option");
        variance = setTimeout(psyBassFunc, tempo);
      }
    } else if ( Math.random() <.3 ) {
      gate = setTimeout(gateFunc, tempo * 1.175);
      lowPassFilter.frequency.value = 2000;
      console.log("B");
      variance = setTimeout(psyBassFunc, tempo);
    } else if ( (randomizer1 / 500) < .3) {
      gate = setTimeout(gateFunc, tempo * .933);
      console.log("A");
      variance = setTimeout(psyBassFunc, tempo);
    } else if ((randomizer1 / 1000) <.3) {
      gate = setTimeout(gateFunc, tempo * .7);
      oscillator2.frequency.value = 123.47 // B3
      console.log("C");
      variance = setTimeout(psyBassFunc, tempo);
    } else if (( (randomizer2 * -1) / 1000) <.6) {
      gate = setTimeout(gateFunc, tempo * 1.267);
      oscillator2.frequency.value = 130.81; // C3
      console.log("D");
      variance = setTimeout(psyBassFunc, tempo);
    } else if ((randomizer1 / 1000) <.7) {
      oscillator2.frequency.value = 146.83; // D3
      console.log("E");
      variance = setTimeout(psyBassFunc, tempo);
    } else {  
      if (Math.random() < .5) {
        gate = setTimeout(gateFunc, tempo * 1.433);
      } else {
        gate = setTimeout(gateFunc, tempo * 1.167);
      }
      oscillator1.frequency.value = 110.00; // A3
      console.log("F");
      variance = setTimeout(psyBassFunc, tempo);
    }

    waveform = setTimeout(randomWaveFunc, tempo);

    if(Math.random() < .1) {
    repeatingPattern = setTimeout(noteSubdivision, tempo);
    }
  }
}

var acidseq2 = function () {

  if(acidBassArp2Playing) {

    if(!gridlocked) {
      tempo = Math.random() * 600;
    } else {
    }

    pitchTrack = false;
    lowPassFilter.frequency.value = 3700 - (Math.random() * 1000);
    waveform = setTimeout(randomWaveFunc, tempo * 2);
    oscillator1.frequency.value = toneDictionary.BoctaveOne;
    oscillator2.frequency.value = toneDictionary.DsharpOctaveOne;

    if ( Math.random() <.3 ) {
      oscillator1.frequency.value = toneDictionary.BoctaveOne;
      lowPassFilter.frequency.value = 2000;

      if (Math.random() < .5) {
            gate = setTimeout(gateFunc, tempo * 1.075);
          } else {
            gate = setTimeout(gateFunc, tempo * .875);
          }

      console.log("B"); 
      variance = setTimeout(acidseq2, tempo);
    } else if ( (randomizer1 / 500) < .3) {
      oscillator1.frequency.value = toneDictionary.DsharpOctaveOne;
      gate = setTimeout(gateFunc, tempo * .7);
      console.log("A");
      variance = setTimeout(acidseq2, tempo);
    } else if ((randomizer1 / 1000) <.3) {
      gate = setTimeout(gateFunc, tempo * .525);
      oscillator1.frequency.value = toneDictionary.BoctaveOne;
      oscillator2.frequency.value = toneDictionary.FsharpOctaveOne;
      console.log("C");
      variance = setTimeout(acidseq2, tempo);
    } else if (( (randomizer2 * -1) / 1000) <.6) {
      gate = setTimeout(gateFunc, tempo * .95);
      oscillator1.frequency.value = toneDictionary.AoctaveOne;
      oscillator2.frequency.value = toneDictionary.BoctaveOne;
      console.log("D");
      variance = setTimeout(acidseq2, tempo);
    } else if ((randomizer1 / 1000) <.7) {
      oscillator1.frequency.value = toneDictionary.BoctaveOne;
      oscillator2.frequency.value = toneDictionary.BoctaveTwo;
      console.log("E");
      variance = setTimeout(acidseq2, tempo);
    } else {  
      if (Math.random() < .5) {
        gate = setTimeout(gateFunc, tempo * 1.075);
      } else {
        gate = setTimeout(gateFunc, tempo * .875);
      }
      oscillator1.frequency.value = toneDictionary.DsharpOctaveTwo;
      oscillator2.frequency.value = toneDictionary.DsharpOctaveOne;
      console.log("F");
      variance = setTimeout(acidseq2, tempo);
    }

    if(Math.random() < .1 ) {
      lowPassFilter.frequency.value = (Math.random() * 1000);
    }
  }
}
