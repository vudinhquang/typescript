"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_repository_1 = require("./product-repository");
let productRepository = new product_repository_1.ProductRepository();
let products = productRepository.getItems();
var MElement;
(function (MElement) {
    MElement.ELM_LIST_PRODUCT = "#list-product";
})(MElement || (MElement = {}));
// Hiển thị danh sách sản phẩm
function showListProduct() {
    $(MElement.ELM_LIST_PRODUCT).html(productRepository.showItemsInHTML());
}
jQuery(function () {
    showListProduct();
});
