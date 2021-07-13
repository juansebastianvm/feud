import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent implements OnInit {

  NumberA:number = 0;
  NumberB:number = 0;
  Resultado:number = 0;


  dividir():void {    
    this.Resultado = (this.NumberA / this.NumberB);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
