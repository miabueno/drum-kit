
// Add even listeners to all the buttons
allButtons = document.querySelectorAll("button.drum");

for (var i = 0; i < allButtons.length; i++) {
	allButtons[i].addEventListener("click", function(){
		playSound(this.innerHTML);
	});
}

// Add event listeners to keyboard keys
document.addEventListener("keydown", function(){
	playSound(event.key);
});

// puts together recipe of finding the corresponding sound file
// and playing that file
function playSound(keyLetter) {
	soundFile = findSound(keyLetter);
	makeSound(soundFile);
}

// returns sound file corresponding to key
function findSound(keyLetter) {
	switch (keyLetter) {
		case "w":
			return "sounds/tom-1.mp3"

		case "a":
			return "sounds/tom-2.mp3"

		case "s":
			return "sounds/tom-3.mp3"

		case "d":
			return "sounds/tom-4.mp3"

		case "j":
			return "sounds/crash.mp3"

		case "k":
			return "sounds/kick-bass.mp3"

		case "l":
			return "sounds/snare.mp3"

		default: console.log(keyLetter);

	}

	return 
}

// plays sound as per sound file argument
function makeSound(soundFile) {
	var audio = new Audio(soundFile);
	audio.play();
}
