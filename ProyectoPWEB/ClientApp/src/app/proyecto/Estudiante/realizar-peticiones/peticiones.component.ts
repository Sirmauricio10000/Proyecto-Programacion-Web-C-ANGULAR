import { Component, OnInit } from '@angular/core';
import { PeticionService } from 'src/app/services/peticion.service';
import { Peticion } from '../../models/peticion';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-peticiones',
  templateUrl: './peticiones.component.html',
  styleUrls: ['./peticiones.component.css']
})
export class PeticionesComponent implements OnInit {
  nombre : string;
  identificacion: string;
  asunto: string;
  comentarios: string;
  constructor(private peticionService: PeticionService) { }


formularioNombre = new FormGroup({
  Nombre1 : new FormControl('',Validators.required),
  Nombre2 : new FormControl('',Validators.required),
  Nombre3 : new FormControl('',Validators.required),
  Nombre4 : new FormControl('',Validators.required)
});

registrarPeticion(){

  this.asunto;
  this.nombre;
  this.identificacion;
  this.comentarios;

}

  peticion: Peticion;
  ngOnInit() {
    this.peticion = new Peticion;
  }

  enviar(){
    alert("Se envio la peticion " + JSON.stringify(this.peticion));
    this.peticionService.envioPeticiones(this.peticion);
  }
}
