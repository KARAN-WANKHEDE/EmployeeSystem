import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NgModel} from '@angular/forms';

const BASIC_URL = ["http://localhost:9090"];

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  
  
  

  constructor(private http: HttpClient) { }

  onUpdate(id: number, department: any): Observable<any> {
    return this.http.put(BASIC_URL+"/api/departments/"+ id,department);
  }

  postDepartment(department: any): Observable<any>{
    return this.http.post(BASIC_URL + "/api/departments",department);
  }

  getAllDepartment(): Observable<any>{
    return this.http.get(BASIC_URL+"/api/departments");
  }

  deleteDepartment(id: number): Observable<any>{
    return this.http.delete(BASIC_URL+"/api/departments/"+ id);
  }
}
