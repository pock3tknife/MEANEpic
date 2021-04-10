import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLogoffComponent } from './nav-logoff.component';

describe('NavLogoffComponent', () => {
  let component: NavLogoffComponent;
  let fixture: ComponentFixture<NavLogoffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavLogoffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavLogoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
