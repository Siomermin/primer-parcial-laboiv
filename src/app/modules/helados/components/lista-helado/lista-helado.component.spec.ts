import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaHeladoComponent } from './lista-helado.component';

describe('ListaHeladoComponent', () => {
  let component: ListaHeladoComponent;
  let fixture: ComponentFixture<ListaHeladoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaHeladoComponent]
    });
    fixture = TestBed.createComponent(ListaHeladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
