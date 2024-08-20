import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdminLugaresComponent } from './add-admin-lugares.component';

describe('AddAdminLugaresComponent', () => {
  let component: AddAdminLugaresComponent;
  let fixture: ComponentFixture<AddAdminLugaresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAdminLugaresComponent]
    });
    fixture = TestBed.createComponent(AddAdminLugaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
