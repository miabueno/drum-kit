allButtons = document.querySelectorAll("button.drum")

for (var i = 0; i < allButtons.length; i++) {
	allButtons[i].addEventListener("click", handleClick)
}

function handleClick() {
	alert("I got clicked!");
}