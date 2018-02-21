
var Letter=function(character){
	this.characterInWord=character;
	this.isGuessed=false;
 

}

Letter.prototype.showWord = function(){
	if(this.isGuessed){
		return(this.characterInWord);

	}else{
		return("_");
	}
}


 





module.exports=Letter;