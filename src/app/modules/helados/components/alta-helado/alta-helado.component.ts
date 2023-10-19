import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Helado } from '../../models/helado';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta-helado',
  templateUrl: './alta-helado.component.html',
  styleUrls: ['./alta-helado.component.scss']
})
export class AltaHeladoComponent {
  altaHeladoForm!: FormGroup;
  @Output() helado = new EventEmitter<Helado>();

  get nombre() {
    return this.altaHeladoForm.get('nombre');
  }
  get tipo() {
    return this.altaHeladoForm.get('tipo');
  }
  get precio() {
    return this.altaHeladoForm.get('precio');
  }
  get peso() {
    return this.altaHeladoForm.get('peso');
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.altaHeladoForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      tipo: ['', Validators.required],
      precio: ['', Validators.required],
      peso: [
        '',
        [Validators.required, Validators.min(250), Validators.max(1000)],
      ],
    });
  }

  onSubmit() {
    if (this.altaHeladoForm.valid) {

      const heladoCreado = new Helado(
        this.nombre?.value,
        this.tipo?.value,
        this.precio?.value,
        this.peso?.value
      );

      Swal.fire('Helado listo!');

      this.helado.emit(heladoCreado);
    }
  }
}
