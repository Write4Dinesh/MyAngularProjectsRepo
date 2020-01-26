import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productList= [
    { name: "mobile",price:4000 }
  ]
  constructor(private http:HttpClient) { }
  getProduct() {
    return this.productList;
  }
 storeProduct(product : any){
   return this.http.post("https://myproduct-43bd5.firebaseio.com/Product.json",product);
 }
  addProduct(product:any){
    this.productList.push(product);
    console.log(this.productList);
    return this.productList;
  }
}
