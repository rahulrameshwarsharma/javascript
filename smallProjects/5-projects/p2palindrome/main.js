/*
Steps to code this project
#1 take the #inputstring and find what is input
#2 reverse the value received from the input and save it in the variable
#3 Compare the two variables

*/

const input = document.getElementById("inputstring");

function reverseString(str) {
    return str.split("").reverse().join("")
}

function check() {
    const value = input.value;
    if (!value) {
        return alert("write something");
    }

    const reverse = reverseString(value);
    // alert(reverse);

    if (value === reverse) {
        alert("P A L I N D R O M E")
    } else {
        alert("Not a palindrome")
    }

    input.value = "";
}