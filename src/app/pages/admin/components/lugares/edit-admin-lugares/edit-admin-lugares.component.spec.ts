import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAdminLugaresComponent } from './edit-admin-lugares.component';

describe('EditAdminLugaresComponent', () => {
  let component: EditAdminLugaresComponent;
  let fixture: ComponentFixture<EditAdminLugaresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAdminLugaresComponent]
    });
    fixture = TestBed.createComponent(EditAdminLugaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
