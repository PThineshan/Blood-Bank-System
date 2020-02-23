import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodTransactionComponent } from './blood-transaction.component';

describe('BloodTransactionComponent', () => {
  let component: BloodTransactionComponent;
  let fixture: ComponentFixture<BloodTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
