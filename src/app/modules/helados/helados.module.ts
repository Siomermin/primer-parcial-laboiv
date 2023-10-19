import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HeladosRoutingModule } from './helados-routing.module';
import { DetalleHeladosComponent } from './pages/detalle-helados/detalle-helados.component';
import { AltaHeladoComponent } from './components/alta-helado/alta-helado.component';
import { BorrarHeladoComponent } from './components/borrar-helado/borrar-helado.component';
import { ListaHeladoComponent } from './components/lista-helado/lista-helado.component';
import { ModificarHeladoComponent } from './components/modificar-helado/modificar-helado.component';


@NgModule({
  declarations: [
    DetalleHeladosComponent,
    AltaHeladoComponent,
    BorrarHeladoComponent,
    ListaHeladoComponent,
    ModificarHeladoComponent
  ],
  imports: [
    CommonModule,
    HeladosRoutingModule,
    ReactiveFormsModule
  ]
})
export class HeladosModule { }
