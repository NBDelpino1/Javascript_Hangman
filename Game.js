var Word = require('./Word.js');
var wordBank = ["FirstWord", "Second-Word", "Third Word 64"];

function Game(){
	this.wins = 0;
	this.losses = 0;
	this.livesRemaining = 0;
	this.lettersUsed = [];
	this.word;

	this.startNewgame = function(){

		this.livesRemaining = 10;
		this.lettersUsed = [];
		this.word = this.generateRandomWord();

		console.log("Welcome to Hangman");

	}

	this.generateRandomWord =  function(){

		var len = wordBank.length;
		var randomWord = wordBank[Math.floor(math.random() * len)];
		var currentWord = new Word(randomWord);

		return currentWord;
	}
	this.printResults = function(){
// Prints results between guesses
	}
	this.endgame = function(){
// Prints emd of game results
	}
}

module.exports = Game;