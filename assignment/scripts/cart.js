console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


// Create a global variable named basket and set it to an empty array.
let basket = [];

// Create a function called addItem. 
 // It should:
        // take an input parameter for a string item
        // add the new item to the global array basket.
        // return true indicating the item was added

function addItem(item){
    // ensure item is in string format
    item = String(item);
    // console.log(typeof item);
    // add item to array
    basket.push(item);
    // check if the item was added to the array
    let isInArray = basket.includes(item);
    // console.log(isInArray);
    if (isInArray == true){
        console.log(`${item} was added`);
        return true;
    }
}

addItem(2);
console.log(`Your shopping basket contains the following items: ${basket}`);
addItem("bread");
console.log(`Your shopping basket contains the following items: ${basket}`);

// ********************************
// ** Attempt at adding items to basket using the prompt method **
// function addItem(){
//     let item = prompt("What item would you like to add to your basket?")
//     basket.push(item);
//     // check if the item was added to the array
//     let isInArray = basket.includes(item);
//     // console.log(isInArray);
//     if (isInArray == true){
//         console.log(`${item} was added`);
//         return true;
//     }
// }

// addItem(2);
// console.log(`Your shopping basket contains the following items: ${basket}`);
// addItem("bread");
// console.log(`Your shopping basket contains the following items: ${basket}`);
// *************

// Create a function called listItems. 
    // It should:
        // loop over the items in the basket array
        // console.log each individual item on a new line

function listItems(item) {
    // loop over the items in the basket array
    for ( let i=0; i < basket.length; i++){
        // console.log each individual item on a new line
        console.log(basket[i]);
    }
}

listItems(basket);


// Create a function called empty. 
    // It should:
        // reset the basket to an empty array

function empty(){
    basket = [];
    console.log(`Your basket has ${basket.length} items`);
}

empty()