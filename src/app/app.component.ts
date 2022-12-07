import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fsc-ang-T35-2';
  nombre = "";
  email = "";
  mensaje = "";
  respuesta:number = 0;
  datos:any;

  enviar(){
    this.datos = {
      nombre:this.nombre,
      email:this.email,
      mensaje:this.mensaje,
      respuesta:this.respuesta
    };
  }

}


