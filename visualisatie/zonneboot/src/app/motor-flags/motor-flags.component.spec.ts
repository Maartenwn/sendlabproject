import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorFlagsComponent } from './motor-flags.component';

describe('MotorFlagsComponent', () => {
  let component: MotorFlagsComponent;
  let fixture: ComponentFixture<MotorFlagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotorFlagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorFlagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
