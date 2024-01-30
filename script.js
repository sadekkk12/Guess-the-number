"use strict";

let tal;

window.addEventListener("DOMContentLoaded", start())



function start() {
    
    console.log("Javascript is running");
    tal = generateRandomNumber();
    document.querySelector("#guess-form").addEventListener("submit", recieveGuess)

}

function generateRandomNumber() {
    return Math.floor(Math.random()*100);

}

function recieveGuess(event) {
    event.preventDefault();
    console.log("guess recieved")
    const form = event.target;
    const value = form.guess.valueAsNumber;
    console.log(value);
    checkGuess(value);
    //form.guess.value="";


}

function checkGuess(guess) {
if (guess === tal) {
    guessIsCorrect(guess);
} else if(guess < tal) {
    guessisTooLow(guess);
} else {
    guessIsTooHigh(guess);
}

}

function guessIsCorrect(guess) {
    console.log("correct")
    const list = document.getElementById("guess-list");
const html = `<li>you guess ${guess} is correct!</li>`
//list.insertAdjacentHTML("beforeend", html);
list.innerHTML += html;
document.getElementById("guess-form").style.display = 'none';


}

function guessisTooLow(guess){
    console.log("low")
    const list = document.getElementById("guess-list");
const html = `<li>you guessed ${guess} - that was too low! Try again</li>`
//list.insertAdjacentHTML("beforeend", html);
list.innerHTML += html;



}

function guessIsTooHigh(guess){
    console.log("high")
const list = document.getElementById("guess-list");
const html = `<li>you guessed ${guess} - that was too high! Try again</li>`
//list.insertAdjacentHTML("beforeend", html);
list.innerHTML += html;

}