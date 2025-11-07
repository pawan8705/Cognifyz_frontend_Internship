const button = document.getElementById("colorButton");
const Code = document.getElementById("colorCode");

getColor = () => {
  let randomCode = "#" + Math.floor(Math.random() * 16777215).toString(16); // Generate a random hex color code
  document.body.style.backgroundColor = randomCode; // Apply the random color as the background of the page
  Code.innerText = randomCode; // display the hex code in the colorCode element
  navigator.clipboard.writeText(randomCode); // Copy the color code to clipboard
}

//Using addEventListener the getColor function trigger when button is clicked
button.addEventListener("click", getColor) 
