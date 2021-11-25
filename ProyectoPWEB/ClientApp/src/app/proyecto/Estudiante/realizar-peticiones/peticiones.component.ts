import { Component, OnInit } from '@angular/core';
import { PeticionService } from 'src/app/services/peticion.service';
import { Peticion } from '../../models/peticion';

@Component({
  selector: 'app-peticiones',
  templateUrl: './peticiones.component.html',
  styleUrls: ['./peticiones.component.css']
})
export class PeticionesComponent implements OnInit {

  constructor(private peticionService: PeticionService) { }

  peticion: Peticion;
  ngOnInit() {
    this.peticion = new Peticion;
  }

  enviar(){
    alert("Se envio la peticion " + JSON.stringify(this.peticion));
    this.peticionService.envioPeticiones(this.peticion);
  }
}
