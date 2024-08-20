import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdminRedesComponent } from './add-admin-redes.component';

describe('AddAdminRedesComponent', () => {
  let component: AddAdminRedesComponent;
  let fixture: ComponentFixture<AddAdminRedesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAdminRedesComponent]
    });
    fixture = TestBed.createComponent(AddAdminRedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
