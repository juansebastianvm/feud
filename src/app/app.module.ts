import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SumaComponent } from './components/operaciones/suma/suma.component';
import { RestaComponent } from './components/operaciones/resta/resta.component';
import { MultiplicacionComponent } from './components/operaciones/multiplicacion/multiplicacion.component';
import { DivisionComponent } from './components/operaciones/division/division.component';
import { FactorialComponent } from './components/operaciones/factorial/factorial.component';
import { PrimosComponent } from './components/operaciones/primos/primos.component';

import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/elements/header/header.component';
import { FooterComponent } from './components/elements/footer/footer.component';
import { BodyComponent } from './components/elements/body/body.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SumaComponent,
    RestaComponent,
    MultiplicacionComponent,
    DivisionComponent,
    FactorialComponent,
    PrimosComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
