import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C3Test3Component } from './c3-test3.component';

describe('C3Test3Component', () => {
  let component: C3Test3Component;
  let fixture: ComponentFixture<C3Test3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C3Test3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C3Test3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
