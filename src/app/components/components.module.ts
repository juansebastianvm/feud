import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyComponent } from './elements/body/body.component';
import { FooterComponent } from './elements/footer/footer.component';
import { HeaderComponent } from './elements/header/header.component';
import { DivisionComponent } from './operaciones/division/division.component';
import { FactorialComponent } from './operaciones/factorial/factorial.component';
import { MultiplicacionComponent } from './operaciones/multiplicacion/multiplicacion.component';
import { PrimosComponent } from './operaciones/primos/primos.component';
import { RestaComponent } from './operaciones/resta/resta.component';
import { SumaComponent } from './operaciones/suma/suma.component';

@NgModule({
  declarations: [
    BodyComponent,
    FooterComponent,
    HeaderComponent,
    DivisionComponent,
    FactorialComponent,
    MultiplicacionComponent,
    PrimosComponent,
    RestaComponent,
    SumaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BodyComponent,
    FooterComponent,
    HeaderComponent,
    DivisionComponent,
    FactorialComponent,
    MultiplicacionComponent,
    PrimosComponent,
    RestaComponent,
    SumaComponent    
  ]
})
export class ComponentsModule { }
