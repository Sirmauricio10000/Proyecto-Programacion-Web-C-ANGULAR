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
    });
  }
}
