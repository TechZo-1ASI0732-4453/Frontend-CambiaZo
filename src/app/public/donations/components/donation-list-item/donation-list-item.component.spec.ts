import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationListItemComponent } from './donation-list-item.component';

describe('DonationListItemComponent', () => {
  let component: DonationListItemComponent;
  let fixture: ComponentFixture<DonationListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonationListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonationListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
