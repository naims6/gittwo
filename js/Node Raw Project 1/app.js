/* 
Title : Basic Node App Example
Description: Simple node application that priot random quotes per second interval
Author : Naim Sorker
Date : 30/5/2025
*/

// Dependencies
const mathLibrary = require('./lib/math')
const quotesLibrary = require('./lib/quotes')

// App Object - Module Scaffolding
const app = {}

// Configuration
app.config = {
    timeBetweenQuotes: 1000,
};

// Funtion that prints a random quote
app.printQuote = function printQuote() {

    const allQuotes = quotesLibrary.allQuotes();

    const numberOfQuotes = allQuotes.length;

    const randomNumber = mathLibrary.getRandomNumber(1, numberOfQuotes);

    const selectedQuote = allQuotes[randomNumber - 1]

    console.log(selectedQuote)
};

// app.printQuote()


// setInterval(function() {
//     app.printQuote();
// }, 1000)


app.indefiniteLoop = function indefiniteLoop() {
    setInterval(app.printQuote, app.config.timeBetweenQuotes)
}

app.indefiniteLoop();