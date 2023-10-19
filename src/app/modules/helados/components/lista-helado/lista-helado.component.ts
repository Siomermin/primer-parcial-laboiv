import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Helado } from '../../models/helado';

@Component({
  selector: 'app-lista-helado',
  templateUrl: './lista-helado.component.html',
  styleUrls: ['./lista-helado.component.scss']
})
export class ListaHeladoComponent {
  @Input() list!: Helado[]; // Define the input property
  @Output() seleccionar: EventEmitter<Helado> = new EventEmitter<Helado>();

  seleccionar_click(item: Helado) {
    this.seleccionar.emit(item);
  }
}
