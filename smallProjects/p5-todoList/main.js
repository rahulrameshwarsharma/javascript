// Pseudocode to make a todo list
// 1. How to display an item on an screen
// 2. 

let items = [];

const ItemsDiv = document.getElementById("items");
const itemInput = document.getElementById("itemInput");
const storageKey = "items";

function renderItems() {
    ItemsDiv.innerHTML = null;

    for (const [index, item] of Object.entries(items)) {

        const container = document.createElement("div")
        container.style.marginBottom = "10px"

        const text = document.createElement("P")
        text.textContent = item;

        const button = document.createElement("button")
        button.textContent = "Delete"
        button.onclick = () => removeItems(index);

        container.appendChild(text)
        container.appendChild(button)

        ItemsDiv.appendChild(container)
    }
}

renderItems();

function loadItems() {
    const oldItems = localStorage.getItem(storageKey);
    if (oldItems) items = JSON.parse(oldItems);
    renderItems();
}

function saveItems() {
    const StringItems = JSON.stringify(items);
    localStorage.setItem(storageKey, StringItems)
}

function addItems() {
    let value = itemInput.value;
    if (!value) {
        alert("You cannot add an empty item");
        return
    }
    items.push(value)
    renderItems()
    itemInput.value = "";
    saveItems();
}

function removeItems(index) {
    items.splice(index, 1);

    renderItems();
    saveItems();
}

document.addEventListener("DOMContentLoaded", loadItems);