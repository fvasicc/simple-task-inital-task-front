import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentDeleteModalComponent } from './appointment-delete-modal.component';

describe('AppointmentDeleteModalComponent', () => {
  let component: AppointmentDeleteModalComponent;
  let fixture: ComponentFixture<AppointmentDeleteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentDeleteModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
