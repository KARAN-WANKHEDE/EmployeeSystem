import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-post-employee',
  templateUrl: './post-employee.component.html',
  styleUrls: ['./post-employee.component.css']
})
export class PostEmployeeComponent implements OnInit{

  postEmployeeForm!: FormGroup;

  datalist: any;

  constructor(private employeeService: EmployeeService,
    private fb: FormBuilder,
    private router: Router){ }

  ngOnInit(){
    this.postEmployeeForm = this.fb.group({
      name: ['', [Validators.required]],
      contact: ['', [Validators.required]],
      jobPosition: ['', [Validators.required]],
      jobType: ['', [Validators.required]],
      department: ['', [Validators.required]],
      location: ['', [Validators.required]]

    });

    this.employeeService.getAllDepartments().subscribe((data: any) =>{
      this.datalist = data; 
    });
  }

  postEmployee() {
    if (this.postEmployeeForm.valid) {
      console.log(this.postEmployeeForm.value);
      this.employeeService
        .postEmployee(this.postEmployeeForm.value)
        .subscribe((res) => {
          console.log(res);
          this.router.navigateByUrl('');
        });
    } else {
      // Mark all fields as touched to trigger validation messages
      this.markFormGroupTouched(this.postEmployeeForm);
    }
  }

  // Utility function to mark all fields in a form group as touched
  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
