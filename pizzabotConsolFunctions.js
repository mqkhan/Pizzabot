const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

//Put your Javscript code here:

const greetNewCustomer = () => {
  alert(
    `Hey! Happy to serve your pizza. On our menu we have  ${vegetarian}  ${hawaiian}  ${pepperoni}`
  );
};

const checkOrderName = (orderName) => {
  if (
    orderName === vegetarian ||
    orderName === hawaiian ||
    orderName === pepperoni
  ) {
    return true;
  } else {
    return false;
  }
};

const totalCost = (orderQuantity) => {
  if (orderQuantity >= 1 && orderQuantity < 3) {
    alert("The pizzas will take 10 minutes.");
  } else if (orderQuantity >= 3 && orderQuantity < 6) {
    alert(`The pizzas will take 15 minutes.`);
  } else {
    alert(`The pizzas will take 20 minutes.`);
  }
  let orderTotal = orderQuantity * pizzaPrice;

  alert(
    `Great, I'll get started on your ${orderName}  right away, it will cost ${orderTotal} kr`
  );
};

// function cookingTime() {}

greetNewCustomer();
let orderName = prompt("Enter the name of the pizza you want to order today");
let orderNameIsCorrect = checkOrderName(orderName);
let orderQuanity = prompt(`How many of  ${orderName} do you want?`);
totalCost(orderQuanity);
