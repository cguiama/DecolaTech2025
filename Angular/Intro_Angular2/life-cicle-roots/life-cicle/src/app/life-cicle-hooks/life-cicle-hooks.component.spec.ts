import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCicleHooksComponent } from './life-cicle-hooks.component';

describe('LifeCicleHooksComponent', () => {
  let component: LifeCicleHooksComponent;
  let fixture: ComponentFixture<LifeCicleHooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifeCicleHooksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeCicleHooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
