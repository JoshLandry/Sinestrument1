'Sinestrument1' AKA the Arpeggio & Texture Generator, by Joshua Landry
A musical instrument created using JavaScript, Express and the Web Audio API.

This app is deployed at
sinestrument1.herokuapp.com
This is the easiest place to have some fun messing around with the app.

Using the app -

Once you have the main page of the app loaded in your browser, move the volume slider with your mouse in order to activate
the synthesizer, and hear a tone.  The initial settings are that Oscillators 1 & 2 are active, and their pitch follows the
mouse position.  Therefore, if you move the mouse around, the tone you hear should change.

Disabling "mouse tracking" or "pitch tracking" in the settings section, you can stop the pitch from following the mouse
position.

Nearly every button present in the user interface will change the sound somehow.  The buttons range from subtle effects, such
as the 'filtered tone' button, to drastic and chaotic transformations.  

This app is designed to allow the user to stack as many different effects as possible, no matter how awful the sound gets.  
If you get to a point where the sound is too gross for you, you can click the 'Reset Synthesizer' button near the top.

Effects and settings are near the top of the page,
while the lower half of the page is reserved for buttons that trigger actual musical sequences.

Tempo (in BPM) can be set by the user from the corresponding section.  Two preset buttons, for 100BPM and 150BPM, are
available as examples.  Note that the tempo will not come into play unless the user triggers a musical sequence by clicking
a button in the lower half of the screen.
