const PizzaShop = require('./pizza-shop');

const pizzaShop = new PizzaShop;


pizzaShop.on('order-pizza', (size,flavour) => {
   console.log(pizzaShop.orderNumbers,'pizzaShop.orderNumbers');
    console.log(`your order has been placed siza ${size} flavour ${flavour}`);
})

pizzaShop.order('large','fajita');

const hello = 'hello';
console.log(hello)