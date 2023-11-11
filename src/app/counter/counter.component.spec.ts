import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsCounter } from './counter.component';

describe('DsCounterComponent', () => {
  let component: DsCounter;
  let fixture: ComponentFixture<DsCounter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsCounter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DsCounter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
