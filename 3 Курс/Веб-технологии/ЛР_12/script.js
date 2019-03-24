var inputStringValue = prompt("Enter word");

document.getElementById('root').innerHTML = `String length ${inputStringValue.length}<br> Reverse word ${inputStringValue.split("").reverse().join("")}`;