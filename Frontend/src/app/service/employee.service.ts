import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = ["http://localhost:9090"];

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  getAllDepartment: any;

  constructor(private http: HttpClient) { }
  
  postEmployee(employee: any): Observable<any>{
    return this.http.post(BASIC_URL + "/api/employees",employee);
  }

  getAllEmployee(): Observable<any>{
    return this.http.get(BASIC_URL+"/api/employees");
  }

  getEmployeeById(id: number): Observable<any>{
    return this.http.get(BASIC_URL+"/api/employees/"+ id);
  }

  updateEmployee(id: number, employee: any): Observable<any>{
    return this.http.put(BASIC_URL+"/api/employees/"+ id,employee);
  }

  deleteEmployee(id: number): Observable<any>{
    return this.http.delete(BASIC_URL+"/api/employees/"+ id);
  }

  getAllDepartments(): Observable<any>{
    return this.http.get(BASIC_URL+"/api/departments");
  }
}

