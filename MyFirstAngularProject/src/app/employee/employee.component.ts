import { Component, OnInit, OnDestroy } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit,OnDestroy{
  emp:any = [];
  review : String = "Enter your review";
  constructor(private service : UserService) { 
  }
  ngOnInit() {
    alert("Page load finished");
    this.service.getUsers().subscribe(
      (response) => {
        this.emp = response;
        //console.log("response=" + this.emp);
      }
    );
  }// it is similar to onPageLoaded
    ngOnDestroy(){
      alert("Page unload finished");
    } //it is similar to onPageUnloaded
  
    getReview() {
    alert("Your review is -" + this.review);
    this.service.getUsers().subscribe(
      (response) => {
        this.emp = response;
        //console.log("response=" + this.emp);
      }
    );
  }
 

}
