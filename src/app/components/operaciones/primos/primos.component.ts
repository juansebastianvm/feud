import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primos',
  templateUrl: './primos.component.html',
  styleUrls: ['./primos.component.css']
})
export class PrimosComponent implements OnInit {

  NumberA:number = 0;
  Resultado:string = '';

  isPrimo(numero:number):boolean {

    for (let i = 2; i < numero; i++) {
  
      if (numero % i === 0) {
        return false;
      }
  
    }
  
    return true;
  }  

  primos():void {   
    
    let inicio:boolean = true;
    let Result:string = '';

    for(let n = 2; n <= this.NumberA; n++){
        if (this.isPrimo(n)) {
          if (inicio) {
            Result = '' + n;
            inicio = false;
          } else {
            Result = Result + ', ' + n;
          }
        }
      }  

    this.Resultado = Result;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
