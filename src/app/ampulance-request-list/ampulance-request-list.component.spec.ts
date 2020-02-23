import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmpulanceRequestListComponent } from './ampulance-request-list.component';

describe('AmpulanceRequestListComponent', () => {
  let component: AmpulanceRequestListComponent;
  let fixture: ComponentFixture<AmpulanceRequestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmpulanceRequestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmpulanceRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
