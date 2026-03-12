const messages = [
"Welcome to Kapkitony Football Club",
"The Pride of Our Community",
"Developing Future Football Stars ⚽"
];

let messageIndex = 0;
let charIndex = 0;

function typeEffect(){

if(charIndex < messages[messageIndex].length){

document.getElementById("typing-text").innerHTML += messages[messageIndex].charAt(charIndex);

charIndex++;

setTimeout(typeEffect, 50);

}else{

setTimeout(() => {

document.getElementById("typing-text").innerHTML = "";
charIndex = 0;
messageIndex = (messageIndex + 1) % messages.length;

typeEffect();

},2000);

}

}

typeEffect();