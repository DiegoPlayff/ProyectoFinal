import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdminTestimoniosComponent } from './add-admin-testimonios.component';

describe('AddAdminTestimoniosComponent', () => {
  let component: AddAdminTestimoniosComponent;
  let fixture: ComponentFixture<AddAdminTestimoniosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAdminTestimoniosComponent]
    });
    fixture = TestBed.createComponent(AddAdminTestimoniosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
