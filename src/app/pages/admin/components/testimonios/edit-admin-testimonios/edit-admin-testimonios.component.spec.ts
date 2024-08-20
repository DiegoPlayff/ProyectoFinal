import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAdminTestimoniosComponent } from './edit-admin-testimonios.component';

describe('EditAdminTestimoniosComponent', () => {
  let component: EditAdminTestimoniosComponent;
  let fixture: ComponentFixture<EditAdminTestimoniosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAdminTestimoniosComponent]
    });
    fixture = TestBed.createComponent(EditAdminTestimoniosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
