import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostEmployeeComponent } from './components/post-employee/post-employee.component';
import { GetAllEmployeesComponent } from './components/get-all-employees/get-all-employees.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { GetAllDepartmentsComponent } from './components/get-all-departments/get-all-departments.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path:'employee', component: PostEmployeeComponent},
  {path:"", component:GetAllEmployeesComponent},
  {path:"employee/:id", component: UpdateEmployeeComponent},
  {path:"department", component:GetAllDepartmentsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
