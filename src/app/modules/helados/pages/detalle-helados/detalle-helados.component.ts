import { Component, Input } from '@angular/core';
import { Helado } from '../../models/helado';
import { HeladoService } from '../../services/helado.service';
@Component({
  selector: 'app-detalle-helados',
  templateUrl: './detalle-helados.component.html',
  styleUrls: ['./detalle-helados.component.scss']
})
export class DetalleHeladosComponent {
  helado?: Helado;
  @Input() list!: Helado[]; // Define the input property

  constructor(private heladoService: HeladoService) { }

  ngOnInit() {
    this.obtenerPizzas();
  }

  seleccionar(item: Helado) {
    this.helado = item;
  }

  obtenerPizzas() {
    this.heladoService.getPizzasAsync()
    .then(res => {
      this.list = res;
    })
  }

  alta(item: Helado) {
    this.heladoService.altaHeladoAsync(item)
    .then(() => this.obtenerPizzas())
  }

  modificar() {
    if (this.helado) {
      this.heladoService.modificarHeladoAsync(this.helado)
      .then(() => this.obtenerPizzas())
    }
  }

  borrar() {
    if (this.helado) {
      this.heladoService.bajaHeladoAsync(this.helado)
      .then(() => {
        this.obtenerPizzas();
        this.helado = undefined;
      })
    }
  }
}
