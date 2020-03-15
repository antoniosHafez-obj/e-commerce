import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  product: Product[] = [
    {
      "id": "HT-1042",
      "category": "Printers",
      "description": "Print up to 25 ppm letter and 24 ppm A4 color or monochrome, with Available first-page-out-time of less than 13 seconds for monochrome and less than 15 seconds for color",
      "name": "Laser Allround",
      "image": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1042.jpg",
      "price": 349,
      "wished": false,
      "purchased": false
    }
    

  ];
  constructor() { }
  
  getProducts(): Product[]{
    return this.product;
  }
  setProducts(products:Product[]){
    this.product = products;
  }
  
}
