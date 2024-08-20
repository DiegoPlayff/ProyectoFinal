import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLugaresComponent } from './admin-lugares.component';

describe('AdminLugaresComponent', () => {
  let component: AdminLugaresComponent;
  let fixture: ComponentFixture<AdminLugaresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminLugaresComponent]
    });
    fixture = TestBed.createComponent(AdminLugaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
