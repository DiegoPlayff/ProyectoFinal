import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAdminRedesComponent } from './edit-admin-redes.component';

describe('EditAdminRedesComponent', () => {
  let component: EditAdminRedesComponent;
  let fixture: ComponentFixture<EditAdminRedesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAdminRedesComponent]
    });
    fixture = TestBed.createComponent(EditAdminRedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
