const fs = require('fs');

const quotes = {};


quotes.allQuotes = function allQuotes() {
    const fileContents = fs.readFileSync(`${__dirname}/quotes.txt`, 'utf8');

    const arrayOfQuotes = fileContents.split(/\r?\n/);
    
    // console.log(fileContents);
    // console.log(arrayOfQuotes);

    return arrayOfQuotes;

}
quotes.allQuotes()
// Exports the Library

module.exports = quotes;