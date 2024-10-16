// Remove the main element from the DOM
const mainElement = document.getElementById("main");
mainElement.remove();

// Create a new <h1> element and assign it to the newHeader variable
const newHeader = document.createElement("h1");

// Set the id of newHeader to 'victory'
newHeader.id = "victory";

// Set the text content of newHeader to "YOUR-NAME is the champion"
newHeader.textContent = "YOUR-NAME is the champion"; // Replace YOUR-NAME with your actual name

// Append newHeader to the document body
document.body.append(newHeader);
