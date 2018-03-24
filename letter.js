
var Letter=function(character){
this.characterInWord=character;
	

}

Letter.prototype.toString = function(){
	if(this.visible===true) {
	return(this.characterInWord);

	}
		return("_");
	
};


Leter.prototype.getSolution = function (){
	return this.characterInWord;

}; 




Letter.prototype.guess= function(characterGuess){
	if(characterGuess.toUpperCase()===this.character.toUpperCase()){
           this.visible=true;
           return true;
}

	return false;
};

module.exports=Letter;