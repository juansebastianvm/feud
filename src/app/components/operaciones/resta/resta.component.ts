import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resta',
  templateUrl: './resta.component.html',
  styleUrls: ['./resta.component.css']
})
export class RestaComponent implements OnInit {

  NumberA:number = 0;
  NumberB:number = 0;
  Resultado:number = 0;


  restar():void {    
    this.Resultado = (this.NumberA - this.NumberB);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
