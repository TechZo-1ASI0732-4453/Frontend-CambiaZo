import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationSideInfoComponent } from './donation-side-info.component';

describe('DonationSideInfoComponent', () => {
  let component: DonationSideInfoComponent;
  let fixture: ComponentFixture<DonationSideInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonationSideInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonationSideInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
