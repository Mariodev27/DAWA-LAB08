import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Mario Santisteban';
  edad = 20;
  email = 'mariosantisteban@tecsup.edu.pe';
  sueldos = [1700, 1600, 1900];
  sitio='http://www.google.com';
  activo = true;
  profesion='';
  anios='';

  esActivo(){
    if(this.activo)
      return 'Trabajador activo';

    else
      return 'Trabajador inactivo';
  }

  ultimos3Sueldos(){
    let suma=0;
    for(let x=0; x<this.sueldos.length; x++)
      suma+=this.sueldos[x];
    return suma;
  }

  contador = 1;
  incrementar(){
    this.contador++;
  }

  decrementar(){
    this.contador--;
  }
}
