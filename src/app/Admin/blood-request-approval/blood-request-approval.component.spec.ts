import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodRequestApprovalComponent } from './blood-request-approval.component';

describe('BloodRequestApprovalComponent', () => {
  let component: BloodRequestApprovalComponent;
  let fixture: ComponentFixture<BloodRequestApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodRequestApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodRequestApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
