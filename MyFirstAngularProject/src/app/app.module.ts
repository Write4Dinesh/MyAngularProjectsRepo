import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './firstComponent/app.component';
import { EmployeeComponent } from './employee/employee.component';
import { DempartmentComponent } from './dempartment/dempartment.component';
import { HighlighterDirective } from './highlighter/highlighter.directive';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './AddProductFolder/add-product/add-product.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DempartmentComponent,
    HighlighterDirective,
    ProductComponent,
    AddProductComponent,
    HomeComponent // our class created in our component
  ],
  imports: [ // 3rd party modules that are imported and used here... ex. http module
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [], // services that are created and to be running in this app
  bootstrap: [AppComponent]// the launcher class or component
})
export class AppModule { }
