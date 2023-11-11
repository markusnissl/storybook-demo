import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsBadge } from './badge.component';

describe('DsBadgeComponent', () => {
  let component: DsBadge;
  let fixture: ComponentFixture<DsBadge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsBadge]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DsBadge);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
