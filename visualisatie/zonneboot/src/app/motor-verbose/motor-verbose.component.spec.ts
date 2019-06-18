import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorVerboseComponent } from './motor-verbose.component';

describe('MotorVerboseComponent', () => {
  let component: MotorVerboseComponent;
  let fixture: ComponentFixture<MotorVerboseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotorVerboseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorVerboseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
