import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDonorComponent } from './display-donor.component';

describe('DisplayDonorComponent', () => {
  let component: DisplayDonorComponent;
  let fixture: ComponentFixture<DisplayDonorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayDonorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
