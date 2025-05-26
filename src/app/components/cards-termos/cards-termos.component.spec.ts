import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsTermosComponent } from './cards-termos.component';

describe('CardsTermosComponent', () => {
  let component: CardsTermosComponent;
  let fixture: ComponentFixture<CardsTermosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsTermosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsTermosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
