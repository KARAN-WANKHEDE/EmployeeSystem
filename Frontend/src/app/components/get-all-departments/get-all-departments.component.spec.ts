import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllDepartmentsComponent } from './get-all-departments.component';

describe('GetAllDepartmentsComponent', () => {
  let component: GetAllDepartmentsComponent;
  let fixture: ComponentFixture<GetAllDepartmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetAllDepartmentsComponent]
    });
    fixture = TestBed.createComponent(GetAllDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
