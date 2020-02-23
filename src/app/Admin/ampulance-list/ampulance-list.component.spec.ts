import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmpulanceListComponent } from './ampulance-list.component';

describe('AmpulanceListComponent', () => {
  let component: AmpulanceListComponent;
  let fixture: ComponentFixture<AmpulanceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmpulanceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmpulanceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
