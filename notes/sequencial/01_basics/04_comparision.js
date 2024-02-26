console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 !=1 );


console.log("2" > 1);
console.log("02" > 1);

// Comparing the null 

console.log(null > 0);          // False
console.log(null == 0);         // False
        //  Why below is true
console.log(null >= 0);         // True

        /* the reason is comparison and equality operators works differently
         in (==) it compare (0) with (null) but in compare operators (<,>) it converts null into (0) first
         and then compare with null so it results in (true)
        */

//  Comparing the undefined

console.log(undefined > 0);          // False
console.log(undefined == 0);         // False
console.log(undefined >= 0);         // False

