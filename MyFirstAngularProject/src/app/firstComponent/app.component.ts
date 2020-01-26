import { Component } from '@angular/core';

@Component({
  selector: 'app-root',  //this selector refers a html tag in global "index.html" file. 
  //...this selector acts as an achor for ths component
  templateUrl: './app.component.html', // link to html of this component
  styleUrls: ['./app.component.css'] // link to css file of this component
})
// the 'export' keyword makes this class visible to outside of this component.
export class AppComponent { // declare this class inside the app.module.ts
  appName = 'MyFirstAngularProject'; // a data variable that will be referred from html file.
}
