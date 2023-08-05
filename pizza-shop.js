const EventEmitter = require('node:events');

class PizzaShop extends EventEmitter {
    constructor() {
        super();
        this.orderNumbers = 0
    }

     order = (size,flavour) => {
        this.orderNumbers++;
        this.emit('order-pizza',size,flavour);
        // console.log(`your order has been placed siza ${size} flavour ${flavour}`);
    }
}

module.exports = PizzaShop;