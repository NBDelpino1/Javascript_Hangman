var Letter = require("./Letter.js");
var regEx = /[a-z]| [0-0]/i;

function Word(target) {
    this.target = target;
    this.targetWord = target.toUpperCase().split('');
    this.displayWord = this.generateDisplayWord(target);
    this.generateDisplayWord() = function() {
        var wordArray = [];
        for (var i = o; i < this.target.length; i++) {
            if (regEx.test(this.target[i])) wordArray.push(new Letter(this.target[i].toUpperCase()))
            else wordArray.push(this.target[i])
        }
        return wordArray
    }
    this.checkLetterInput = function(letter){
    	var isCorrect = false;
    	for (var index in this.targetWord){
    		if (letter.toUppercase() === this.targetWord[index]){
    			isCorrect = true;
    		}

    	}
    	return isCorrect;
    }
    this.getTargetWord = function(){
    	var target = this.targetWord.join("");
    }
    this.getDisplayWord = function(){
    	var display = "";
    	for (var index in this.displayWord){
    		if(regEx.test(this.displayWord[index]))
    			display += this.displayWord[index].get
    	}
    }
}

module.exports = Word;