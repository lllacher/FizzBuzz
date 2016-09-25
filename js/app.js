$(document).ready(function() {
  var myString = "";
  function fizzBuzz(num) {
  	val = ""
	for (var i = 1; i <= num; i++) {
	    myString += '<p>';
    	if(i%3 === 0){
			myString += 'Fizz';
		} 
		if(i%5 === 0){
			myString += 'Buzz';
		} 
		if(i%3 !== 0 && i%5 !== 0) {
			myString += i
		}
        myString += '</p>';
	}
	$('body').append(myString);
  } 
var n = prompt("Please enter the number you would like to count to.");
fizzBuzz(n);
});