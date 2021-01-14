"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
const cart_item_1 = require("./cart-item");
class Cart {
    constructor() {
        this.cartItems = [];
        this.totalQuantity = 0;
        this.totalPrice = 0;
    }
    addProduct(product, quantity = 1) {
        let position = this.getProductPosition(product);
        if (position > -1) {
            this.cartItems[position].quantity += quantity;
        }
        else {
            this.cartItems[this.cartItems.length] = new cart_item_1.CartItem(product, quantity);
        }
        this.totalQuantity += quantity;
        this.totalPrice += product.price * quantity;
    }
    getProductPosition(product) {
        let total = this.cartItems.length;
        for (let i = 0; i < total; i++) {
            if (this.cartItems[i].product.id == product.id)
                return i;
        }
        return -1;
    }
    updateProduct(product, quantity = 1) {
    }
    removeProduct(product) {
    }
    isEmpty() {
        return (this.cartItems.length == 0);
    }
    getTotalQuantity() {
        return 1;
    }
    getTotalPrice() {
        return 1;
    }
    showCartBodyInHTML() {
        return "";
    }
    showCartFooterInHTML() {
        return "";
    }
}
exports.Cart = Cart;
