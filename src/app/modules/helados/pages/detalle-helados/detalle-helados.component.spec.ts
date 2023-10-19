import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleHeladosComponent } from './detalle-helados.component';

describe('DetalleHeladosComponent', () => {
  let component: DetalleHeladosComponent;
  let fixture: ComponentFixture<DetalleHeladosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleHeladosComponent]
    });
    fixture = TestBed.createComponent(DetalleHeladosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
