let myNums = [1, 2, 3]

let newNums = myNums.reduce( function ( acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval;
}, 0)

let total = console.log(`${newNums}`);