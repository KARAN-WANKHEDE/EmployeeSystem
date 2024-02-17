import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from 'src/app/service/department.service';

@Component({
  selector: 'app-get-all-departments',
  templateUrl: './get-all-departments.component.html',
  styleUrls: ['./get-all-departments.component.css']
})
export class GetAllDepartmentsComponent implements OnInit{


  departments: any=[];
  postDepartmentForm!: FormGroup;
  id: number = this.activatedRoute.snapshot.params["id"];

  constructor(private activatedRoute: ActivatedRoute,
    private departmentService:DepartmentService,
    private fb: FormBuilder,
    private router: Router){}

  ngOnInit(){
    this.getAllDepartment();
    this.postDepartmentForm = this.fb.group({
      name: [null, [Validators.required]]
  })
  }

  getAllDepartment(){
    this.departmentService.getAllDepartment().subscribe((res)=> {
      console.log(res);
      this.departments = res;
    
    })
  }

  postDepartment(){
    console.log(this.postDepartmentForm.value);
    this.departmentService.postDepartment(this.postDepartmentForm.value).subscribe((res) => {
      console.log(res);
      this.getAllDepartment();
    })
  }

  deleteDepartment(id: number){
    this.departmentService.deleteDepartment(id).subscribe((res)=>{
      console.log(res);
      this.getAllDepartment();
    })
  }

  onEdit(department: any){
    this.departments.forEach((element: { isEdit: boolean; }) => {
        element.isEdit = false;
    });
    department.isEdit = true;
  }

  onUpdate(){
    this.departmentService.onUpdate(this.id,this.postDepartmentForm.value).subscribe((res) => {
      console.log(res);
  });
  }
}
