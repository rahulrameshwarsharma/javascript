"use strict";       // treat all js code as newer version

// alert(3 + 3);       // we are using Node, not the browser so we cannot use alert this way

console.log(3 
    +3 );           // This is not a good way to write the code, because of less readability

    
console.log("Shiv");

let name = "shiv"
let age = 18
let isLoggedIn = false

// Total number of data types 

// number => It's range is around 2 to power 53 something
// bigint => Used when we have very large number , used in trading, stock marget or in very big websites like facebook, reddit
// string => ""
// boolean => true/false    // user logged in or not, have credit card value or not
// null => standalone value, this is also a data type
// undefined => It is when we have defined variable but not defined the value
// symbol   => unique type of data type, usually used when we work with react

// object => check in object file

console.log(typeof undefined);  // undefined
console.log(typeof null);   // object