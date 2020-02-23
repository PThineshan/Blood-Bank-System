import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmpulanceRequestComponent } from './ampulance-request.component';

describe('AmpulanceRequestComponent', () => {
  let component: AmpulanceRequestComponent;
  let fixture: ComponentFixture<AmpulanceRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmpulanceRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmpulanceRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
