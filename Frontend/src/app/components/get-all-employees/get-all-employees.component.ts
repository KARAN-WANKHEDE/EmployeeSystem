import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-get-all-employees',
  templateUrl: './get-all-employees.component.html',
  styleUrls: ['./get-all-employees.component.css']
})
export class GetAllEmployeesComponent {

  employees: any = [];

  constructor(private employeeService: EmployeeService){}
  
  ngOnInit(){
    this.getAllEmployees();
  }

  getAllEmployees(){
    this.employeeService.getAllEmployee().subscribe((res)=> {
      console.log(res);
      this.employees = res;
    })
  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe((res)=>{
      console.log(res);
      this.getAllEmployees();
    })
  }

    
    
}
