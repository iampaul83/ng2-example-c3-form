import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C3Test2Component } from './c3-test2.component';

describe('C3Test2Component', () => {
  let component: C3Test2Component;
  let fixture: ComponentFixture<C3Test2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C3Test2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C3Test2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
