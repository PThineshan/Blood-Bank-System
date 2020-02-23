import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmpulanceDetailsComponent } from './ampulance-details.component';

describe('AmpulanceDetailsComponent', () => {
  let component: AmpulanceDetailsComponent;
  let fixture: ComponentFixture<AmpulanceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmpulanceDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmpulanceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
