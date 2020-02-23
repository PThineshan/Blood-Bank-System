import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorSidebarComponent } from './donor-sidebar.component';

describe('DonorSidebarComponent', () => {
  let component: DonorSidebarComponent;
  let fixture: ComponentFixture<DonorSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonorSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
