import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarPanelComponent } from './solar-panel.component';

describe('SolarPanelComponent', () => {
  let component: SolarPanelComponent;
  let fixture: ComponentFixture<SolarPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolarPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolarPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
