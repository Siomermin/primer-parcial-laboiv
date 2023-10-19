import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleHeladosComponent } from './pages/detalle-helados/detalle-helados.component';

const routes: Routes = [
  { path: '', component: DetalleHeladosComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeladosRoutingModule { }
