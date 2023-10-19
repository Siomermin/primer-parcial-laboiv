import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Helado } from '../../models/helado';

@Component({
  selector: 'app-borrar-helado',
  templateUrl: './borrar-helado.component.html',
  styleUrls: ['./borrar-helado.component.scss']
})
export class BorrarHeladoComponent {
  @Input() item?: Helado;
  @Output() confirmar: EventEmitter<void> = new EventEmitter<void>();
  borrarHeladoForm!: FormGroup;

  get nombre() {
    return this.borrarHeladoForm.get('nombre');
  }
  get tipo() {
    return this.borrarHeladoForm.get('tipo');
  }
  get precio() {
    return this.borrarHeladoForm.get('precio');
  }
  get peso() {
    return this.borrarHeladoForm.get('peso');
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.borrarHeladoForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      tipo: ['', Validators.required],
      precio: ['', Validators.required],
      peso: ['', [Validators.required, Validators.min(500), Validators.max(1000)]],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.nombre?.setValue(this.item?.nombre);
    this.tipo?.setValue(this.item?.tipo);
    this.precio?.setValue(this.item?.precio);
    this.peso?.setValue(this.item?.peso);
  }

  onSubmit() {
    if (this.borrarHeladoForm.valid && this.item) {
      this.confirmar.emit();
      this.item = undefined;
    } else {
      console.error(this.borrarHeladoForm.errors);
    }
  }
}
