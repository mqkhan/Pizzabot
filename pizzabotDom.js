const pizzaTypeEl = document.getElementById("pizzaType").value;
const quantityOfPizzaEl = document.getElementById("quantityOfPizza");
const typeOfPizzaEl = document.getElementById("typeOfPizza");

const orderTotalEl = document.getElementById("orderTotal");
const pizzaPrice = 80;
const vegetarian = "Vegetarian";
const hawaiian = "Hawaiian";
const pepperoni = "Pepperoni";

function calculateTotal() {
  const numberOfPizzasEl = document.getElementById("numberOfPizzas").value;

  if (numberOfPizzasEl >= 1 && numberOfPizzasEl < 3) {
    quantityOfPizzaEl.textContent = "The pizzas will take 10 minutes.";
  } else if (numberOfPizzasEl >= 3 && numberOfPizzasEl < 6) {
    quantityOfPizzaEl.textContent = "The pizzas will take 15 minutes.";
  } else {
    quantityOfPizzaEl.textContent = "The pizzas will take 20 minutes.";
  }

  const total = numberOfPizzasEl * pizzaPrice;

  orderTotalEl.textContent = "Total price of your order is " + total;
}
