import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(private productService: ProductService) {
  }
  productList;
  priceRange = 0;
  ngOnInit() {
    this.productList = this.productService.addProduct({
      "name": "mobile", price: 5000
    });
    this.productList = this.productService.getProduct();
    console.log("added a product via service");
  }

}
