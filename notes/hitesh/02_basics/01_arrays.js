const myArr = [0, 1, 2, 3, 4, 5]

const sliceArray = myArr.slice(1, 3)

console.log(sliceArray);
console.log(myArr);

const spliceArray = myArr.splice(1, 3)
console.log(spliceArray);
console.log(myArr);

                                /*  Slice VS Splice 
                                        slice returns portion of Array without manipulating the original Array
                                        whereas Splice also do the same but include the last element and manupulate the Array
                                        this happens because it takes reference from original array (heap) where as slice makes copies of the Array. 

                                */

// To merge two Arrays
const marvel = [ "Ironman", "Thor", "Spiderman",];
const dcHeros = [ "Superman", "Flash", "Batman"];

const newHero = marvel.concat(dcHeros);                // Not used mostly (concate)
const newHeros = [...marvel, ...dcHeros];              // Better way to merge (spread operator)

console.log(newHero);
console.log(newHeros);

// In above, we can also use concatinate operator, but this is more better way to merge the Arrays.
