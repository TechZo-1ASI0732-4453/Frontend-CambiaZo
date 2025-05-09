import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedExchangesComponent } from './finished-exchanges.component';

describe('FinishedExchangesComponent', () => {
  let component: FinishedExchangesComponent;
  let fixture: ComponentFixture<FinishedExchangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinishedExchangesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinishedExchangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
