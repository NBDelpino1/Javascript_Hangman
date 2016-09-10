var inquirer = require("inquirer");
var Game = require('./Game.js');

var game new Game();

function initHangman(){
	game.startNewGame();
	promptAndProcessInput();
}

function promptAndProcessInput(){
	inquirer.prompt([{
		type: "input",
		name: "userGuess",
		message: "Enter guess (letter a -z or number 0-9",
		validate: function(value){


			var validInputs = /[a-z]|[0-9]/i;
			if (value.length === 1 && validInput.test(value))
				return "Please enter a valid guess (letter a-z or number 0-9): ";
		}

		}]).then (function(answer){

			var userGuess = answer.userGuess.topUpperCase();

			if (game.letterUsed.indexOf(userGuess) === -1){

				game.letterUsed.push(userGuess);

				var correct = game.word.checkLetterInput(userGuess);

				if (correct){
					game.printresults("Your guess was right!")
				}
				else {
					game.livesRemaining--;
					game.printResults("Wrong!!")
				}
			}
			else{
				game.printResults("You have already used that letter");
			}
			var userWon = game.word.getDisplayWord() === game.word.getTargetWord();
			if (userWon){
				game.wins++;
				endCurrentGame("You won!!");
			}
			else if (game.livesRemaining > 0)
				promptAndProcessInput();
			else {
				game.losses++;
				endCurrentGame("dead dead");
			}
		})
}



initHangman();