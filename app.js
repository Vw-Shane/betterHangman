var log = require('single-line-log').stdout;


var userGuess = process.argv[2];
function Word() {
	
};
function Letter(){

};
console.log("Guess a letter");

var wordsToGuess = ["lt","rt","lt"];
var K =  Math.floor(Math.random() * wordsToGuess.length);

var splitEm = wordsToGuess[K].split("");
console.log(splitEm);
for (var i = 0; i < splitEm.length; i++) {
	console.log("_");
};
if(userGuess === indexOF(splitEm)) {
            console.log("Kick ass dude")
        }
else {console.log("YouSuck")}        


