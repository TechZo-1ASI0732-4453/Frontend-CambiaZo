import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationDetailComponent } from './donation-detail.component';

describe('DonationItemComponent', () => {
  let component: DonationDetailComponent;
  let fixture: ComponentFixture<DonationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonationDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
