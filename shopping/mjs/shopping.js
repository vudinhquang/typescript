"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_repository_1 = require("./product-repository");
let productRepository = new product_repository_1.ProductRepository();
let products = productRepository.getItems();
var MElement;
(function (MElement) {
    MElement.ELM_LIST_PRODUCT = "#list-product";
    MElement.ELM_NOTIFICATION = "#mnotification";
    MElement.ELM_CART_BODY = "#my-cart-body";
    MElement.ELM_CART_FOOTER = "#my-cart-footer";
})(MElement || (MElement = {}));
var MNotification;
(function (MNotification) {
    MNotification.NOTI_READY_TO_BUY = "Ready to buy product";
})(MNotification || (MNotification = {}));
// Hiển thị danh sách sản phẩm
function showListProduct() {
    $(MElement.ELM_LIST_PRODUCT).html(productRepository.showItemsInHTML());
}
// Hiển thị thông báo
function showNotification(str) {
    $(MElement.ELM_NOTIFICATION).html(str);
}
// Hiển thị giỏ hàng:
function showCart() {
    $(MElement.ELM_CART_BODY).html("");
    $(MElement.ELM_CART_FOOTER).html("");
}
jQuery(function () {
    showListProduct();
    showCart();
    showNotification(MNotification.NOTI_READY_TO_BUY);
});
