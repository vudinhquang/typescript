import { ProductRepository } from './product-repository';
import { Product } from './product';

let productRepository = new ProductRepository();
let products : Product[] =  productRepository.getItems();

let productItem = productRepository.getItemByID(100);
console.log(productItem);