"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
const product_1 = require("./product");
class ProductRepository {
    constructor() {
        this.products = [];
    }
    addItem(product) {
    }
    getItems() {
        return [];
    }
    getItemByID(id) {
        return new product_1.Product();
    }
    showItemsInHTML() {
        return "";
    }
}
exports.ProductRepository = ProductRepository;
