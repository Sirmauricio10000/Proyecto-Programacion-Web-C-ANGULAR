import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Proyecto } from '../../models/proyecto';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-consultar-proyecto-estudiante',
  templateUrl: './consultar-proyecto-estudiante.component.html',
  styleUrls: ['./consultar-proyecto-estudiante.component.css']
})
export class ConsultarProyectoEstudianteComponent implements OnInit {

  constructor(private proyectoService: ProyectoService) { }

  evaluador1: string = "Sin Asignar";
  evaluador2: string = "Sin Asignar";
  comentarios: string = "Sin Comentarios";
  usuario: Usuario;
  reference: string;
  proyecto: Proyecto;

  ngOnInit() {
    this.usuario = new Usuario;
    this.proyecto = new Proyecto;
    this.usuario = JSON.parse(localStorage.getItem("currentUser"));
    this.reference = this.usuario.userName;

    this.proyectoService.getOne(this.reference).subscribe(result => {
      this.proyecto = result;
      if (this.proyecto.evaluadorProyecto1!= null) this.evaluador1 = this.proyecto.evaluadorProyecto1.persona.nombre;
      if (this.proyecto.evaluadorProyecto2!= null) this.evaluador2 = this.proyecto.evaluadorProyecto2.persona.nombre;
      if (this.proyecto.comentariosProyecto!= null) this.comentarios = this.proyecto.comentariosProyecto;
    });
  }
}
