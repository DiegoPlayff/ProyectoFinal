import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRedesComponent } from './admin-redes.component';

describe('AdminRedesComponent', () => {
  let component: AdminRedesComponent;
  let fixture: ComponentFixture<AdminRedesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminRedesComponent]
    });
    fixture = TestBed.createComponent(AdminRedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
