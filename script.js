// let speech =new SpeechSynthesisUtterance();


// document.querySelector("button").addEventListener("click",() => {
//     speech.text = document.querySelector("textarea").value;
//     window.speechSynthesis.speak(speech);
// });


// Create a new SpeechSynthesisUtterance object
let speech = new SpeechSynthesisUtterance();

// Function to speak the text in the textarea
function buttonfun(){
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
}

// Function to clear the textarea and stop any ongoing speech
function buttonfun1(){
    document.querySelector("textarea").value = ''; // Clear the textarea
    window.speechSynthesis.cancel(); // Stop any ongoing speech
}

// Add event listener to the Speak button
document.querySelector("").addEventListener("click", listen);

// Add event listener to the Clear button
document.querySelector("#clear").addEventListener("click", clear);
