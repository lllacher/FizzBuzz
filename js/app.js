$(document).ready(function() {
  var myString = "";
  function fizzBuzz() {
  	val = ""
	for (var i = 1; i <= 100; i++) {
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
fizzBuzz();
});