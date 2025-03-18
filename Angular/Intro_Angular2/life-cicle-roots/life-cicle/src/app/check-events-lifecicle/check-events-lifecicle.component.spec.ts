import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckEventsLifecicleComponent } from './check-events-lifecicle.component';

describe('CheckEventsLifecicleComponent', () => {
  let component: CheckEventsLifecicleComponent;
  let fixture: ComponentFixture<CheckEventsLifecicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckEventsLifecicleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckEventsLifecicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
