import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  result: any;

  constructor(private http: HttpClient) { }
  getUsers() {
     this.result =  this.http.get("https://jsonplaceholder.typicode.com/users");
    alert("getUsers() called:" + this.result);
    return this.result;
  }
}
