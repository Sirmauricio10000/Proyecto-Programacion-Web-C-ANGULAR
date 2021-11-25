import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-modificar-perfil',
  templateUrl: './modificar-perfil.component.html',
  styleUrls: ['./modificar-perfil.component.css']
})

export class ModificarPerfilComponent implements OnInit {
 nombre: string ='Jefferson Palacio';
 identificaccion : string='1003242180';
 correo : string='davidpalacio1506@outlook.com';
 telefono:string='3178444562';
 claveAcceso:string='el huevo';
claveNew:string ="";
claveValidar:string="";

  constructor( ){};

  ngOnInit() {

  }

  validarNuevaClave(){
    if(this.claveNew===this.claveValidar){
      alert("OK ");
      this.claveNew="";
      this.claveValidar="";
    }else{
      alert("LAS CLAVES NO SON IGUALES");
    }

  }

}

