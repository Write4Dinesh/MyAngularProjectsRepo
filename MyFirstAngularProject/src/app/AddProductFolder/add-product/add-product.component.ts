import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productno: string
  name: string
  price: number
  manufacturer: string
  constructor(private service: ProductService) { }// ProductServide dependency will be injected later

  ngOnInit() {
  }
  addProduct() {
    this.service.storeProduct({
      "productno": this.productno,
      "name": this.name,
      "price": this.price,
      "manufacturer": this.manufacturer
    }).subscribe(
      (res) => {
      console.log(res);
    });
  }
}
