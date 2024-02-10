// when we make object using constructor it makes singleton object

// Object Literals: Objects can be made singleton only in the case of constructors.

const User = new Object()       // this is a singleton object
const User = {}                 // this is a non singleton object

const mySym = Symbol("key1");

const JsUser = {
    name: "Shiv",
    "full name": "Shiv Sundar Sharma",
    email: "shiv@google.com",
    [mySym]: "myKey1",
}

console.log(JsUser.name);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

console.log(typeof JsUser.name);
console.log(typeof JsUser["full name"]);
console.log(typeof JsUser[mySym]);

JsUser.email = "shivsundar@google.com";
Object.freeze(JsUser);


JsUser.email= "shiv@gmail.com";

console.log(JsUser);        // Printing out original object after freezing it's email