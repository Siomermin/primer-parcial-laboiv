import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Helado } from '../../models/helado';
@Component({
  selector: 'app-modificar-helado',
  templateUrl: './modificar-helado.component.html',
  styleUrls: ['./modificar-helado.component.scss']
})
export class ModificarHeladoComponent {
  @Input() item?: Helado;
  @Output() confirmar: EventEmitter<void> = new EventEmitter<void>();
  modHeladoForm!: FormGroup;

  get nombre() {
    return this.modHeladoForm.get('nombre');
  }
  get tipo() {
    return this.modHeladoForm.get('tipo');
  }
  get precio() {
    return this.modHeladoForm.get('precio');
  }
  get peso() {
    return this.modHeladoForm.get('peso');
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.modHeladoForm = this.formBuilder.group({
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

  confirmar_submit() {
    if (this.modHeladoForm.valid && this.item) {

      this.item.tipo = this.tipo?.value;
      this.item.peso = this.peso?.value;
      this.item.precio = this.precio?.value;

      this.confirmar.emit();

    } else {
      console.error(this.modHeladoForm.errors);
    }
  }
}
