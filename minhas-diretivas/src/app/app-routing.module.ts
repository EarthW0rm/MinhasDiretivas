import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ExemploContadorCaracteresComponent } from './_components/exemplo-contador-caracteres/exemplo-contador-caracteres.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'contador-caracteres', component: ExemploContadorCaracteresComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ]
  , exports: [ RouterModule ]
  , declarations: []
})
export class AppRoutingModule { }
