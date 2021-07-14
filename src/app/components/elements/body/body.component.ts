import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  estilo:boolean = true;

  mostrarS:boolean = false;
  mostrarR:boolean = false;
  mostrarD:boolean = false;
  mostrarM:boolean = false;
  mostrarP:boolean = false;
  mostrarF:boolean = false;
  mostrarT:boolean = false;
  variasO:number = 0;
  operacionActiva:string = "";

  mostrar(indice:string):void {

    switch(indice) { 
      case 'Suma': { 
        this.mostrarS = this.onOff(this.mostrarS);       
         break; 
      } 
      case 'Resta': { 
        this.mostrarR = this.onOff(this.mostrarR); 
         break; 
      } 
      case 'División': { 
        this.mostrarD = this.onOff(this.mostrarD);  
         break; 
      } 
      case 'Multiplicación': { 
        this.mostrarM = this.onOff(this.mostrarM); 
         break; 
      } 
      case 'Primos': { 
        this.mostrarP = this.onOff(this.mostrarP); 
         break; 
      } 
      case 'Factorial': { 
        this.mostrarF = this.onOff(this.mostrarF);  
         break; 
      }               
      case 'Todas': { 
        if (this.mostrarT) {
          this.variasO=0;
          this.mostrarS = false;
          this.mostrarR = false;
          this.mostrarD = false;
          this.mostrarM = false;
          this.mostrarP = false;
          this.mostrarF = false;
          this.mostrarT = false; 
        } else {
          this.variasO=6;
          this.mostrarS = true;
          this.mostrarR = true;
          this.mostrarD = true;
          this.mostrarM = true;
          this.mostrarP = true;
          this.mostrarF = true;           
          this.mostrarT = true;  
        }

         break; 
      }                     
      default: { 
         break; 
      } 
   } 

    if (this.mostrarS && this.mostrarR && this.mostrarM && this.mostrarD && this.mostrarF && this.mostrarP) {
      this.mostrarT = true; 
    } else {
      this.mostrarT = false; 
    }

    if ((indice == 'Todas' && this.mostrarT) || (this.mostrarS && this.mostrarR && this.mostrarM && this.mostrarD && this.mostrarF && this.mostrarP)) {
      this.dataService.operacion = 'Todas';
    } else if ((indice == 'Todas' && !this.mostrarT) || (!this.mostrarS && !this.mostrarR && !this.mostrarM && !this.mostrarD && !this.mostrarF && !this.mostrarP)) {
      this.dataService.operacion = 'Ninguna';
    } else if (this.variasO > 1) {
      this.dataService.operacion = this.variasO + ' Operaciones';
    } else if (this.variasO = 1)  {     
      this.dataService.operacion = this.verificarOperacionActiva();     
    }

  }

  verificarOperacionActiva():string {

        if (this.mostrarS) { this.operacionActiva = "Suma"; }      
        if (this.mostrarR) { this.operacionActiva = "Resta";  } 
        if (this.mostrarD) { this.operacionActiva = "División";  }   
        if (this.mostrarM) { this.operacionActiva = "Multiplicación";  }  
        if (this.mostrarP) { this.operacionActiva = "Primos";  }  
        if (this.mostrarF) { this.operacionActiva = "Factorial"; }  
        
        return this.operacionActiva;
  }

  onOff (valor:boolean):boolean {
    if (valor) {
      this.variasO=this.variasO-1;
      return false;
    } else {
      this.variasO=this.variasO+1;
      return true;
    } 
  }

  cambiarEstilo() {

    this.variasO=0;
    this.mostrarS = false;
    this.mostrarR = false;
    this.mostrarD = false;
    this.mostrarM = false;
    this.mostrarP = false;
    this.mostrarF = false;
    this.mostrarT = false; 
    
    if (this.dataService.estilo) {
      this.dataService.estilo = false;
    } else {
      this.dataService.estilo = true;
    }
  }

  constructor( private dataService: DataService ) { }

  ngOnInit(): void {
  }

}
