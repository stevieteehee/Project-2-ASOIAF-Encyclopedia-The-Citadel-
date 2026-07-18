const button = document.getElementById("toggleButton");
const info = document.getElementById("extraInfo");

// Unhide info on button click
function handleButtonClick() {
    console.log("The button was clicked.");
    info.style.display = "block";
}

button.addEventListener("click", handleButtonClick);