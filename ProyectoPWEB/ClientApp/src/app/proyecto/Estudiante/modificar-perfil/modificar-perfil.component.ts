import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from '../../models/persona';
import { Usuario } from '../../models/usuario';


@Component({
  selector: 'app-modificar-perfil',
  templateUrl: './modificar-perfil.component.html',
  styleUrls: ['./modificar-perfil.component.css']
})

export class ModificarPerfilComponent implements OnInit {

  constructor(private personaService: PersonaService, private modalService: NgbModal){}

  usuarioActual :Usuario;
  usuarioNuevo : Persona;

  ngOnInit() {
    this.usuarioNuevo = new Persona;
    this.usuarioActual = JSON.parse(localStorage.getItem("currentUser"));
  }

  modificar(){
    this.usuarioActual.persona.correo = this.usuarioNuevo.correo;
    this.usuarioActual.persona.telefono = this.usuarioNuevo.telefono;
    this.usuarioActual.persona.nombre = this.usuarioNuevo.nombre;


    this.personaService.put(this.usuarioActual.persona).subscribe(p => {
      if (p != null) {
      const messageBox = this.modalService.open(AlertModalComponent)
      messageBox.componentInstance.title = "Mensaje";
      messageBox.componentInstance.message = 'Usuario modificado correctamente';
      this.usuarioActual.persona = p;
      }
    })
  }

}

