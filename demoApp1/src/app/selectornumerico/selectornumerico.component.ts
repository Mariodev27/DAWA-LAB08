import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-selectornumerico',
  templateUrl: './selectornumerico.component.html',
  styleUrls: ['./selectornumerico.component.css']
})

export class SelectornumericoComponent implements OnInit{
  @Input() minimo: number;
  @Input() maximo: number;
  actual: number;
  constructor() { 
    this.minimo = 0; // Asigna un valor inicial a "minimo" en el constructor
    this.maximo = 0; // Asigna un valor inicial a "maximo" en el constructor
    this.actual = 0; // Asigna un valor inicial a "actual" en el constructor
  }
  ngOnInit() {
    this.actual = this.minimo;
  }
  incrementar(){
    if (this.actual<this.maximo)
      this.actual++;
  }
  decrementar(){
    if (this.actual<this.minimo)
      this.actual--;
  }
  fijar(v:number){
    if (v>=this.minimo && v<=this.maximo)
      this.actual=v;
  }
}
