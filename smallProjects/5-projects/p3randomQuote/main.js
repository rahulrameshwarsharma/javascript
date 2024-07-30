/*
Steps to code this project
#1 take the #inputstring and find what is input
#2 reverse the value received from the input and save it in the variable
#3 Compare the two variables

*/

let quotes = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "Provident qui ut quia ullam non, explicabo beatae asperiores suscipit facilis porro neque rerum libero aliquid ab laboriosam rem quisquam, vitae odit.",
    "Magnam blanditiis incidunt et vitae, a pariatur unde dicta, provident eum porro aliquam rerum ipsum totam. Laboriosam aut quidem distinctio provident suscipit quod laborum odit dolorum, totam incidunt officiis architecto?",
    "Tempora odit ipsa ipsum reiciendis quidem aperiam quae cupiditate nulla, distinctio totam aliquam mollitia a, suscipit repellat dignissimos et. Expedita quaerat sed labore cupiditate, esse quo voluptas harum quisquam reprehenderit.",
    "Excepturi quia alias ipsa dignissimos non magni hic temporibus dolores, velit, quaerat soluta eveniet officia aut facere neque, voluptates nulla ipsum sapiente sit. Officiis unde quod quis illo hic atque.",
    "Minus et excepturi labore, veritatis obcaecati a, maiores sed distinctio fugiat quia laudantium, ducimus ex? Incidunt, nisi laudantium hic tempore ad explicabo nam earum eum voluptas repellendus quam soluta modi.",
    "Reiciendis quidem aperiam quae cupiditate nulla, distinctio totam aliquam mollitia a, suscipit repellat dignissimos et. Expedita quaerat sed labore cupiditate, esse quo voluptas harum quisquam reprehenderit.",
    "Ipsa dignissimos non magni hic temporibus dolores, velit, quaerat soluta eveniet officia aut facere neque, voluptates nulla ipsum sapiente sit. Officiis unde quod quis illo hic atque.",
    "Veritatis obcaecati a, maiores sed distinctio fugiat quia laudantium, ducimus ex? Incidunt, nisi laudantium hic tempore ad explicabo nam earum eum voluptas repellendus quam soluta modi.",
]

const usedIndexes = new Set()

const quoteElement = document.getElementById("quote");

function generateQuote() {
    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear();
    }
    while (true) {
        const randIndex = Math.floor(Math.random() * quotes.length);
        console.log(randIndex);
        if (usedIndexes.has(randIndex)) continue

        const newQuote = quotes[randIndex];
        quoteElement.innerHTML = newQuote;
        
        usedIndexes.add(randIndex);
        break;
    }
}