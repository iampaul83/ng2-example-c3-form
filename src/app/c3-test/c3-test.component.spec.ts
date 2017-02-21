import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C3TestComponent } from './c3-test.component';

describe('C3TestComponent', () => {
  let component: C3TestComponent;
  let fixture: ComponentFixture<C3TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C3TestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C3TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
