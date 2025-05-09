import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentProductCardComponent } from './recent-product-card.component';

describe('RecentProductCardComponent', () => {
  let component: RecentProductCardComponent;
  let fixture: ComponentFixture<RecentProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentProductCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
