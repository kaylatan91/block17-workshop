const coffeeMenu = require("./coffee_data.js");

//Prompt 2: Print an array of all the drinks on the menu
const printMenu = (item) => {
    return item.name;
}
console.log(coffeeMenu.map(printMenu));

//Prompt 3: Print an array of drinks that cost 5 and under
const underFive = (item) => {
    return item.price <= 5;
}
const drinksUnderFive = coffeeMenu.filter(underFive);
console.log(drinksUnderFive);

//Promp 4: Print an array of drinks that are priced at an even number
const evenNum = (item) => {
    return item.price % 2 === 0;
}
const drinksEvenNum = coffeeMenu.filter(evenNum);
console.log(drinksEvenNum);

//Prompt 5: Print the total if you were to order one of every drink

//Find the price of each drink 
const findPrice = (item) => {
    return item.price;
}
const priceArray = coffeeMenu.map(findPrice);
console.log(priceArray);

//Get total of all drinks 
const sumDrinks = (accumulator, currentValue) => {
    return accumulator + currentValue;
}
const totalPrice = priceArray.reduce(sumDrinks);
console.log(totalPrice);

//Prompt 6: Print an array with all the drinks that are seasonal 
const findSeasonalDrinks = (item) => {
    return item.seasonal === true;
}
const seasonalDrinks = coffeeMenu.filter(findSeasonalDrinks);
console.log(seasonalDrinks);

//Prompt 7: Print all the seasonal drinks with the words "with imported beans" after the item name. For ex: "affogato with imported beans"

const drinksWithImportedBeans = seasonalDrinks.map((item) => {
    return item.name + " with imported beans";
}); 
console.log(drinksWithImportedBeans);