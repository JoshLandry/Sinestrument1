'Sinestrument1' AKA the Arpeggio & Texture Generator, by Joshua Landry
A musical instrument created using JavaScript, Express and the Web Audio API.

This app is deployed at
sinestrument1.herokuapp.com
This is the easiest place to have some fun messing around with the app.

Using the app -

  Once you have the main page of the app loaded in your browser, move the volume slider with your mouse in order to activate the synthesizer, and hear a tone.  

Settings -

  The initial settings are that Oscillators 1 & 2 are active, and their pitch follows the mouse position.  Therefore, if you move the mouse around, the tone you hear should change.

  Disabling "Mouse Tracking" or "Pitch Tracking" in the settings section, you can stop the pitch from following the mouse
  position.

The PWN Oscillator - 

  Oscillators 3 & 4, disabled by default, together form the Pulsewave Modulating Oscillator, or PWM Oscillator.  You can start it by clicking 'Start PNW Oscillator'.  The sliders for "PWM Duty Cycle" and "PWM Filter Cutoff" will shape the texture of the resulting tone.

  This oscillator pair is a recent addition, so it's currently uneffected by most of the effects and sequence buttons.  It has a tendency to sound hideously out of tune with the primary oscillators 1 & 2.  This will be changed in future versions.

Tempo - 

  Tempo (in BPM) can be set by the user from the corresponding section.  Two preset buttons, for 100BPM and 150BPM, are available as examples.  Note that the tempo will not come into play unless the user triggers a musical sequence by clicking
  a button in the lower half of the screen.


Basic Effects -

  Effects and settings are near the top of the page, while the lower half of the page is reserved for buttons that trigger actual musical sequences.

  Nearly every button present in the user interface will change the sound somehow.  The buttons range from subtle effects, such as the "Filtered tone" button, to drastic and chaotic transformations.

  "Randomize Waveform" causes a rhythmic cycling through all possible waveform types (sine, saw, square, etc.) at the current tempo, for a pleasant textural effect.



Mangle Your Sound -

  These are more drastic effects that tend to have rather noisy and unmusical results.  I find them fascinating, so I've left them in.  This app is designed to allow the user to stack as many different effects as possible, no matter how awful the sound gets.  If you get to a point where the sound is too gross for you, you can click the "Reset Synthesizer" button near the top.

Playing sequences -

  There are several categories of sequences.  They are:
    
    Fixed Sequences - These are sequences of notes that I created myself.  You can set the tempo yourself, but the notes can't be changed.

    Mouse Controlled Sequences - These sequences will respond to mouse position as long as you have "Mouse Tracking" enabled.  Moving the cursor from one side of the screen to the other will result in note and chord changes.

    Scale Sequences - These sequences are based on scales from music theory.  I've included C Major, as well as a couple examples of modes, and the Whole Tone Scale, commonly used in cartoons for dream sequences.

Sequence Effects -

  All sequences can be 'unlocked' with the "Unlock Grid" button, which renders tempo irrelevant, so every note is played for a random length.  This is a very chaotic effect.

  Most of the sequences can also be mathematically randomized with the "Randomize Sequence" button.  If this is enabled, the same notes will play in all manner of unexpected randomizing orders.

Arp your own chord -

  A work in progress, this section allows you to set the notes that will be played in a randomized sequence, which you can trigger by hitting the 'Play Your Arp' button.

  First, specify 5 notes in the given inputs, and click 'Submit Your Notes'.

  Right now, it only works if you write the note names in the same way as I did in the code, which is as follows -

    C#4 is CsharpOctaveFour
    D3 is DoctaveThree

  Needless to say, I'm working on getting it to a more flexible state.