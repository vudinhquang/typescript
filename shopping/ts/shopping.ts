import { ProductRepository } from './product-repository';
import { Product } from './product';

let productRepository = new ProductRepository();
let products : Product[] =  productRepository.getItems();

namespace MElement {
    export const ELM_LIST_PRODUCT : string = "#list-product";
    export const ELM_NOTIFICATION : string = "#mnotification";
	export const ELM_CART_BODY: string = "#my-cart-body";
	export const ELM_CART_FOOTER: string = "#my-cart-footer";
}

namespace MNotification {
	export const NOTI_READY_TO_BUY : string = "Ready to buy product";
}

// Hiển thị danh sách sản phẩm
function showListProduct() : void{
	$(MElement.ELM_LIST_PRODUCT).html(productRepository.showItemsInHTML());
}

// Hiển thị thông báo
function showNotification(str: string) : void{
	$(MElement.ELM_NOTIFICATION).html(str);
}

// Hiển thị giỏ hàng:
function showCart() : void{
	$(MElement.ELM_CART_BODY).html("");
	$(MElement.ELM_CART_FOOTER).html("");
}

jQuery(function() { 
    showListProduct();
    showCart();
    showNotification(MNotification.NOTI_READY_TO_BUY);

	// Buy Product
	$("a.price").on("click", function(){
        let id : number = $(this).data("product");
        let quantity : number = +$("input[name='quantity-product-" + id + "']").val();
	});
})
