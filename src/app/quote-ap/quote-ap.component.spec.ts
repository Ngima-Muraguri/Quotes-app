import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteApComponent } from './quote-ap.component';

describe('QuoteApComponent', () => {
  let component: QuoteApComponent;
  let fixture: ComponentFixture<QuoteApComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteApComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteApComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
