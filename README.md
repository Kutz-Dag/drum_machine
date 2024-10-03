# Drum Machine using React

A project for freeCodeCamp. A musical drum machine that plays sounds when the keys are pressed. It should look a bit similar to this:

![Capture](https://github.com/user-attachments/assets/c534ed2d-23c4-40bc-a7a0-ccdc9b99a6e4)(https://drum-machine.freecodecamp.rocks/)

#### What was the aim?
* Use React and a few other frontend programming languages and tools.
* The goal is to create a musical keypad drum machine that plays different sounds when specific keys are pressed.
* The keypad should also have the option to be muted or to choose the custom volume.
* There also needed to be a button that could switch between two different musical drum types.

#### User stories/tests to pass:

- [x] 1: I should be able to see an outer container with a corresponding id="drum-machine" that contains all other elements.

- [x] 2: Within #drum-machine I can see an element with a corresponding id="display".

- [x] 3: Within #drum-machine I can see 9 clickable drum pad elements, each with a class name of drum-pad, a unique id that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: Q, W, E, A, S, D, Z, X, C. The drum pads MUST be in this order.

- [x] 4: Within each .drum-pad, there should be an HTML5 audio element which has a src attribute pointing to an audio clip, a class name of clip, and an id corresponding to the inner text of its parent .drum-pad (e.g. id="Q", id="W", id="E" etc.).

- [x] 5: When I click on a .drum-pad element, the audio clip contained in its child audio element should be triggered.

- [x] 6: When I press the trigger key associated with each .drum-pad, the audio clip contained in its child audio element should be triggered (e.g. pressing the Q key should trigger the drum pad which contains the string Q, pressing the W key should trigger the drum pad which contains the string W, etc.).

- [x] 7: When a .drum-pad is triggered, a string describing the associated audio clip is displayed as the inner text of the #display element (each string must be unique).

## CodePen Project Link
You can view my project on CodePen using this link:
[*Drum Machine* by Kutz](https://codepen.io/kutzz/pen/NWeZywd)
