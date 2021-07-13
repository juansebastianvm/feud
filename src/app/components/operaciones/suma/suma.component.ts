import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent implements OnInit {

  NumberA:number = 0;
  NumberB:number = 0;
  Resultado:number = 0;

  sumar():void {    
    this.Resultado = (this.NumberA + this.NumberB);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
