var userGuess = process.argv[2];
function Word(src) {
	this.src = src;
	this.allLetters = [];
	//loop through src string th
	for (var i = 0; i < src.length; i++) {
		var letter = new Letter(src[i]);
		this.allLetters.push(letter);
	};
	this.displayWord =function () {
		var output = "";
		for (var i = 0; i < this.allLetters.length; i++) {
			var lettr = word.allLetters[i];
			output = output + lettr.displayChar() + " ";
		};
		return output;
	};
};
function Letter(trueValue){
// is the letter guessed
	this.trueValue=trueValue;
	this.guessed = false;
	this.displayChar = function(num){
		if (this.guessed){
			return this.trueValue;

		}
		else{
			return "_";
		}
	};
	
};
console.log("Guess a letter");

var wordsToGuess = ["ltdsfsdfd","rbfbt","lddt"];
var K =  Math.floor(Math.random() * wordsToGuess.length);
var word = new Word(wordsToGuess[K]);
console.log(word.displayWord());
// var splitEm = wordsToGuess[K].split("");
// console.log(splitEm);



// for (var i = 0; i < word.allLetters.length; i++) {
// 	var lettr = word.allLetters[i];
// 	console.log(lettr.displayChar());
// };
// console.log()
// if(userGuess === splitEm) {
//             console.log("Nice dude")
//         }
// else {console.log("YouSuck")}   



