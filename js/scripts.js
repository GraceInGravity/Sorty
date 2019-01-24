$(document).ready(function(){

	$("#form").submit(function(event) {


	var string = "How are you doing today!";
	var letters = string.split("");
	var mysterySentence = [];
	/* var length = letters.length; */

	var vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];



	for (var i = 0; i<= letters.length-1; i++){

	  for (var j=0; j <= vowels.length-1; j++ ) {

	    if (vowels[j] == letters[i]) {
	    letters[i] = "-";
	   /*  return(); */
	  	}


		}
	  /* mysterySentence.push(letters[i]) */;

	  }
	letters = letters.join("");

	alert(letters);

   event.preventDefault();

	});
});





var string = "How are you doing today!";
var letters = string.split("");
var mysterySentence = [];
/* var length = letters.length; */

var vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];



for (var i = 0; i<= letters.length-1; i++){

  for (var j=0; j <= vowels.length-1; j++ ) {

    if (vowels[j] == letters[i]) {
    mysterySentence.push("-");
   /*  return(); */
  	}


	}
 mysterySentence.push(letters[i]);

  }
  mysterySentence = mysterySentence.toString();
  alert(mysterySentence);



















/* function vowelSort(letter) {
if letter == vowel then return newString.map("-");

map newString
}

var string = "How are you doing today!";
var letters = string.split("");
var newString = [];
var length = letters.length;

var vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
var i = 0;

letters.forEach()

vowels.forEach(function(vowel) {
  letters = letters.split(vowel);

 newString =

});
alert(letters);
 */


/* var string = prompt("Enter a random sentence!");
 */
