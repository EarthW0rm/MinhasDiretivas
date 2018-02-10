import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContadorCaracteresDirective } from './_directives/contador-caracteres.directive';
import { ExemploContadorCaracteresComponent } from './_components/exemplo-contador-caracteres/exemplo-contador-caracteres.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent
    , ContadorCaracteresDirective
    , ExemploContadorCaracteresComponent
    , DashboardComponent
  ],
  imports: [
    BrowserModule
    , NgbModule.forRoot()
    , AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  isCollapsed = false;
}
