import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BienvenidaRoutingModule } from './bienvenida-routing.module';

import { GithubService } from './services/github.service';
import { HttpClientModule } from '@angular/common/http';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';

@NgModule({
  declarations: [BienvenidaComponent],
  imports: [CommonModule, BienvenidaRoutingModule, HttpClientModule],
  providers: [GithubService],
})
export class BienvenidaModule {}
