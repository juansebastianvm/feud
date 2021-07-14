import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  operacion: string = 'Ninguna';

  estilo: boolean = true;

  constructor() { }
}
