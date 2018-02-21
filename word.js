
var Letter = require('./letter.js');

  var Word=function(word){
   this.wordString=word;
   this.wordArray=this.wordString.split("");
   this.lettersArray= this.makeLetterArray;
     }
   Word.prototype.makeLetterArray=function(){
   	    var letters=[];
   		for (var i = 0; i<this.wordArray.length; i++) {
   		letters.push(new Letter(this.wordArray[i]));
       
   		} 
   		 return letters;
   		 console.log(letters);
   }
   Word.prototype.displayWord = function (){

    var word = [];

    for(var i = 0; i < this.lettersArray.length; i++)
    {
        word.push(this.lettersArray[i].showWord());
        word.push(" "); // this add a space bewteen letters 
    }

    return word.join("");
};
   var fruit =new Word ("apples");

  console.log("\n", fruit.displayWord());

//console.log(new Word("apples"));
//console.log(fruit.makeLetterArray);
console.log(fruit);
module.exports=Word;
