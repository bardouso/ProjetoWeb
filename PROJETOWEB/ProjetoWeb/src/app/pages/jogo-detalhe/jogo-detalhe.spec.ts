import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogoDetalhe } from './jogo-detalhe';

describe('JogoDetalhe', () => {
  let component: JogoDetalhe;
  let fixture: ComponentFixture<JogoDetalhe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JogoDetalhe],
    }).compileComponents();

    fixture = TestBed.createComponent(JogoDetalhe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
