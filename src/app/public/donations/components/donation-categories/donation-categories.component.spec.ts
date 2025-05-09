import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationCategoriesComponent } from './donation-categories.component';

describe('DonationCategoriesComponent', () => {
  let component: DonationCategoriesComponent;
  let fixture: ComponentFixture<DonationCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonationCategoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonationCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
