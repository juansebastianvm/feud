import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent implements OnInit {

  estiloSuma:boolean = this.dataService.estilo;

  NumberA:number = 0;
  NumberB:number = 0;
  Resultado:number = 0;

  sumar():void {    
    this.Resultado = (this.NumberA + this.NumberB);
  }

  constructor( private dataService: DataService ) { }

  ngOnInit(): void {
  }

}
