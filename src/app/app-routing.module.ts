import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  {
    path: 'bienvenida',
    loadChildren: () =>
      import('./modules/bienvenida/bienvenida.module').then(
        (m) => m.BienvenidaModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then(
        (m) => m.LoginModule
      ),
  },
  {
    path: 'repartidor/alta',
    loadChildren: () =>
      import('./modules/repartidor/alta-repartidor/alta-repartidor.module').then(
        (m) => m.AltaRepartidorModule
      ),
      canActivate: [AuthGuard],
      data: { authGuardPipe: () => redirectUnauthorizedTo('login') }
  },
  {
    path: 'repartidor/detalle',
    loadChildren: () =>
      import('./modules/repartidor/detalle-repartidor/detalle-repartidor.module').then(
        (m) => m.DetalleRepartidorModule
      ),
      canActivate: [AuthGuard],
      data: { authGuardPipe: () => redirectUnauthorizedTo('login') }
  },
  {
    path: 'helados',
    loadChildren: () =>
      import('./modules/helados/helados.module').then(
        (m) => m.HeladosModule
      ),
      canActivate: [AuthGuard],
      data: { authGuardPipe: () => redirectUnauthorizedTo('login') }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
