import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiplicacion',
  templateUrl: './multiplicacion.component.html',
  styleUrls: ['./multiplicacion.component.css']
})
export class MultiplicacionComponent implements OnInit {

  NumberA:number = 0;
  NumberB:number = 0;
  Resultado:number = 0;


  multiplicar():void {    
    this.Resultado = (this.NumberA * this.NumberB);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
