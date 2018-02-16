




// Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:


// A string value to store the underlying character for the letter
// A boolean value that stores whether that letter has been guessed yet
// A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
// A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correc





// HINT: If you name your letter's display function toString, JavaScript will call that function automatically whenever casting that object to a string (check out this



function Letter = (letterGuess, isguessed){
this.letterGuess="";
this.isguessed=true;

 var letter= new Letter(process.argv[3]);

 this.alreadyGuessed= function(){
 if (letterGuess==process.argv[3]){
 	console.log("You've already guessed " + this.letterGuess + "!");
    return this.letterGuess;
}
 else (return "_");	
 }


this.isCorrect = function(letter){
    if (letter==);
    console.log("Excellent Job!" + letter);
}

letterGuess.push(letter);



}



module.exports=Letter;