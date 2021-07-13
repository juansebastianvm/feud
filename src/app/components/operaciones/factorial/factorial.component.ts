import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-factorial',
  templateUrl: './factorial.component.html',
  styleUrls: ['./factorial.component.css']
})
export class FactorialComponent implements OnInit {

  NumberA:number = 0;
  Resultado:number = 0;


  factorial():void { 
  
    let valor:number = 1;

    for(let n = 1; n <= this.NumberA; n++){
      valor = n * valor;
      }  
    this.Resultado = (valor);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
