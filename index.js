var Word = require('./word.js');
var inquirer = require('inquirer');
var prompt = require('prompt');


function Game() {
  var self = this;
   this.play = function() {
    this.guessesLeft = 10;
    this.newWord();
  };
  
  this.newWord = function() {
    var randWord = words[Math.floor(Math.random() * words.length)];
    this.currentWord = new Word(randWord);
    console.log('\n' + this.currentWord + '\n');
    this.userGuess();
  };

  this.userGuess = function() {
    this.inputLetter().then(function() {
      
      if (self.guessesLeft < 1) {
        console.log(
          "You Lose! Word was: \"" + self.currentWord.getSolution() + "\"\n"
        );
        self.playAgain();
        
      }
      else if (self.currentWord.guessedCorrectly()) {
        console.log("You guessed it! Keep it up");
        self.guessesLeft = 10;
        self.newWord();
        
      }
      else {
        self.userGuess();
      }
    });
  };

  this.playAgain = function() {
    inquirer
      .prompt([
        {
          type: "confirm",
          name: "choice",
          message: "Play Again?"
        }
      ])
      .then(function(val) {
        
        if (val.choice) {
          self.play();
        }
        else {
          self.quit();
        }
      });
  };
  
  this.inputLetter = function() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "choice",
          message: "Guess a letter!",
          validate: function(val) {
            
            return /[a-z1-9]/gi.test(val);
          }
        }
      ])
      .then(function(val) {
      
        var didGuessCorrectly = self.currentWord.guessLetter(val.choice);
        if (didGuessCorrectly) {
          console.log(chalk.green("\nYahoo Mountain Dew!\n"));
          
        }
        else {
          self.guessesLeft--;
          console.log(chalk.red("\nNot today!\n"));
          console.log(self.guessesLeft + " guesses remaining!!!\n");
        }
      });
  };

  this.quit = function() {
    console.log("\nThank you for playing!");
    process.exit(8);
  };
}
