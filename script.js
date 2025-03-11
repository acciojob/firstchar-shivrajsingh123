function firstChar(text) {
  return text.trimStart().charAt(0);
}

// Do not change the code below
// Uncomment the following lines to show the prompt popup
const text = prompt("Enter text:");  // Declare 'text' properly
alert(firstChar(text));