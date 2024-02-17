import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostEmployeeComponent } from './components/post-employee/post-employee.component';
import { GetAllEmployeesComponent } from './components/get-all-employees/get-all-employees.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { GetAllDepartmentsComponent } from './components/get-all-departments/get-all-departments.component';
import { NavbarComponent } from './component/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PostEmployeeComponent,
    GetAllEmployeesComponent,
    UpdateEmployeeComponent,
    GetAllDepartmentsComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
