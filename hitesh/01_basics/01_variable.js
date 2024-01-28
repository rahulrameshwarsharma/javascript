const accountID = 144553
let accountEmail = "shiv@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"


// lets modify all of them to check who allows and not allows to change data

accountId = 2    // not allowed

accountEmail = "abc@a.com";
accountPassword = "12121311"
accountCity = "Bengaluru"
let accountState;


// Console.log (accountID);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountEmail, accountPassword, accountCity, accountState]);