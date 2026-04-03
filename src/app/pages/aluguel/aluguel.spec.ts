import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aluguel } from './aluguel';

describe('Aluguel', () => {
  let component: Aluguel;
  let fixture: ComponentFixture<Aluguel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aluguel],
    }).compileComponents();

    fixture = TestBed.createComponent(Aluguel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
