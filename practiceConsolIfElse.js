const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

//Put your Javscript code here:

const greetNewCustomer = () => {
  alert(
    `Hey! Happy to serve your pizza. On our menu we have  ${vegetarian}  ${hawaiian}  ${pepperoni}`
  );

  let orderName = prompt("Enter the name of the pizza you want to order today");

  if (orderName === vegetarian) {
    alert(`Excellent choice! ${vegetarian} is good for your health.`);
  } else if (orderName === hawaiian) {
    alert(`Excellent choice! I also like ${hawaiian}.`);
  } else if (orderName === pepperoni) {
    alert(`${pepperoni} is a very good choice?`);
  } else {
    alert(" Enter the correct pizza name");
  }

  let orderQuantity = prompt(`How many of  ${orderName} do you want?`);
  alert(`you have ordered ${orderQuantity} ${orderName}`);

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

greetNewCustomer();
