var totalTendered = 0;
var chosenCheese
function display() {
    totalTendered = document.getElementById("money").value;
    document.getElementById("money-entered").innerHTML = "You have entered $" + totalTendered;
}
function ParmeseanSelected() {
    chosenCheese = document.getElementById("cheeseParmesean").value;
    document.getElementById("cheese-selected").innerHTML = "You have chosen " + chosenCheese;
}
function GoudaSelected() {
    chosenCheese = document.getElementById("cheeseGouda").value;
    document.getElementById("cheese-selected").innerHTML = "You have chosen " + chosenCheese;
}
function MozerellaSelected() {
    chosenCheese = document.getElementById("cheeseMozerella").value;
    document.getElementById("cheese-selected").innerHTML = "You have chosen " + chosenCheese;
}
function BrieSelected() {
    chosenCheese = document.getElementById("cheeseBrie").value;
    document.getElementById("cheese-selected").innerHTML = "You have chosen " + chosenCheese;
}
function AmericanSelected() {
    chosenCheese = document.getElementById("cheeseAmerican").value;
    document.getElementById("cheese-selected").innerHTML = "You have chosen " + chosenCheese;
}
function CheddarSelected() {
    chosenCheese = document.getElementById("cheeseCheddar").value;
    document.getElementById("cheese-selected").innerHTML = "You have chosen " + chosenCheese;
}
var items = {
    Gouda : 1.00,
    Parmesean : 1.50,
    Mozerella : 0.25,
    Brie : 1.00,
    American: 1.50,
    Cheddar : 1.00
};
//Bag of items
var bag = [];
var getItems = function() {
return items;
}
function enterMoney(amount) {
    if(isNaN(amount) == false) {
                totalTendered += amount;
    } else {
        console.log("You entered the wrong amount");
    }
}
function makeSelection(selection) {
    if(!items[selection]) {
        console.log("No Item Exist");
    } else {
    var item_price = items[selection];
    if(item_price <= totalTendered) {
        totalTendered = totalTendered - item_price;
        return selection;
    } else {
        console.log("Not enough money to buy " + selection);
    }
}
}
function getChange() {
    if(!totalTendered) {
    console.log("There is no money to return");
    }
    var amountToReturn = totalTendered;
    //remove all the money
    totalTendered = 0;
    return amountToReturn;
}
function formSubmitted() {
totalTendered = document.getElementById("entered_money").value;
document.getElementById("total_money").innerHTML = entered_money;
}
function clearForm() {
document.getElementById("name").value = '';
document.getElementById("entered_name").innerHTML = '';
document.getElementById("form_email").value = '';
document.getElementById("entered_email").innerHTML = '';
document.getElementById("form_age").value = '';
document.getElementById("entered_age").innerHTML = '';
document.getElementById("form_bio").value = '';
document.getElementById("entered_bio").innerHTML = '';
}