import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBloodCampComponent } from './check-blood-camp.component';

describe('CheckBloodCampComponent', () => {
  let component: CheckBloodCampComponent;
  let fixture: ComponentFixture<CheckBloodCampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckBloodCampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckBloodCampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
