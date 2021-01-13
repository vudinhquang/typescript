import { ProductRepository } from './product-repository';
import { Product } from './product';

let productRepository = new ProductRepository();
let products : Product[] =  productRepository.getItems();

namespace MElement {
	export const ELM_LIST_PRODUCT : string = "#list-product";
}

// Hiển thị danh sách sản phẩm
function showListProduct() : void{
	$(MElement.ELM_LIST_PRODUCT).html(productRepository.showItemsInHTML());
}

jQuery(function() { 
    showListProduct();
})
