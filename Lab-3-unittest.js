//LAB 3 - UNIT TESTING
//alert("lab 3");//please delete this line once connected.
/**
 * Validate input is a Humber College Student number.
 * Returns true if input validates.
 * @param {string} idIn
 */
//var checker = prompt("Student #?");
//alert(checkHumbrId(checker));
function checkHumbrId(studentn) {
    "use strict";
    var patt = /^n\d{8}$/i;
    return patt.test(studentn);
}
// Testing function
function test__checkNumber(input, expected) {
    "use strict";
    var result = checkHumbrId(input);
    var testResult = " **FAILED** ";
    if (result === expected) {
        testResult = " ==PASSED== ";
    }
    var msg = "Value tested: " + input + " Expected result: " + expected + testResult + "<br />";
    var outputMsg = document.getElementById("data");
    outputMsg.innerHTML += msg;
}
test__checkNumber("n01193625", true);
test__checkNumber("N01193625", true);
test__checkNumber("s01193625", false);
test__checkNumber(123456789, false);
test__checkNumber("nqwertyui", false);
test__checkNumber("", false);
test__checkNumber(null, false);
test__checkNumber("nn01245678", false);
test__checkNumber("n111111111", true);