import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Recupera } from './recupera';

describe('Recupera', () => {
  let component: Recupera;
  let fixture: ComponentFixture<Recupera>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Recupera],
    }).compileComponents();

    fixture = TestBed.createComponent(Recupera);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
