//LAB 3 - UNIT TESTING
alert("lab 3");//please delete this line once connected.
/**
 * Validate input is a Humber College Student number.
 * Returns true if input validates.
 * @param {string} idIn
 */

var checker = prompt("Student #?");
alert(checkHumbrId(checker));

function checkHumbrId(studentn) {
	var patt = /^n\d{8}$/i;
	return patt.test(studentn);
	}


