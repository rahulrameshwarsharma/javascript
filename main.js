const codingLang = ["js", "javascript", "java", "ruby", "c", "cpp"];
const coding = [
        {
            "Language": "js",
            "level": "easy",
            "title": "scripting language"
        },
        {
            "Language": "javascript",
            "level": "moderate",
            "title": "programing and scripting language"
        },
        {
            "Language": "js",
            "level": "easy",
            "title": "scripting language"
        },
        {
            "Language": "java",
            "level": "moderate",
            "title": "scripting language"
        },
        {
            "Language": "c",
            "level": "easy",
            "title": "programing language"
        },
        {
            "Language": "ruby",
            "level": "moderate",
            "title": "scripting language"
        },
        {
            "Language": "cpp",
            "level": "Advance",
            "title": "Programming language"
        },
];

coding.forEach ( (val, index, arr) => {
    // console.log(val.Language, val.level);
    // console.log(val, index, arr);
})

const Num = [1, 2, 3, 4, 5, 6]
const newNums = Num.filter( (num) => num > 2);
// console.log(newNums);

const number = Num.filter( (nums) => {
    return nums > 3;
})
// console.log(number);
const userLang = coding.filter( (lang) => (lang.title === "scripting language"));
// console.log(userLang);

// let plusTen = Num.map( (val) => val + 10);
// console.log (plusTen);
// doing above with return scope

let plusTen = Num.map( (val) => {
    return val + 10
});
// console.log (plusTen);

// plusTen = Num.map((val) => val + 10).map((val) => val*10 ).map( (val) => val + 1);
// console.log(plusTen);
// using filter in chaining of maps

plusTen = Num.map((val) => val + 10).map((val) => val*10 ).map( (val) => val + 1).filter( (val) => val > 140);
// console.log(plusTen);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "c course",
        price: 299
    },
    {
        itemName: "cpp course",
        price: 1999
    },
    {
        itemName: "python course",
        price: 4999
    },
    {
        itemName: "react-native course",
        price: 6999
    },
];

const bill = shoppingCart.reduce( (acc, product) => (acc + product.price), 0);
console.log(bill);