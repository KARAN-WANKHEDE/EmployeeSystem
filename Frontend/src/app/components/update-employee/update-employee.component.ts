import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit{

  updateEmployeeForm! : FormGroup;
  id: number = this.activatedRoute.snapshot.params["id"];
  datalist: any;

  constructor(private activatedRoute: ActivatedRoute,
    private service: EmployeeService,
    private fb: FormBuilder,
    private router: Router){ }

  ngOnInit(){
    this.updateEmployeeForm = this.fb.group({
      name: ['', [Validators.required]],
      contact: ['', [Validators.required]],
      jobPosition: ['', [Validators.required]],
      jobType: ['', [Validators.required]],
      department: ['', [Validators.required]],
      location: ['', [Validators.required]]

    })
    this.service.getAllDepartments().subscribe((data: any) =>{
      this.datalist = data; 
      console.log(this.datalist);
    });

    this.getEmployeeById();

  }

  getEmployeeById(){
    this.service.getEmployeeById(this.id).subscribe((res)=>{
      console.log(res);
      this.updateEmployeeForm.patchValue(res);
      console.log(this.updateEmployeeForm.value);

    })
  }

  updateEmployee() {
    if (this.updateEmployeeForm.valid) {
      this.service.updateEmployee(this.id, this.updateEmployeeForm.value).subscribe((res) => {
        console.log(res);
        this.router.navigateByUrl("");
      });
    } else {
      // Mark all fields as touched to trigger validation messages
      this.markFormGroupTouched(this.updateEmployeeForm);
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
