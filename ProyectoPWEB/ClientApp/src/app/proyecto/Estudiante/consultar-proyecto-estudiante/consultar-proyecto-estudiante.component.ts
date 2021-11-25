import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Proyecto } from '../../models/proyecto';

@Component({
  selector: 'app-consultar-proyecto-estudiante',
  templateUrl: './consultar-proyecto-estudiante.component.html',
  styleUrls: ['./consultar-proyecto-estudiante.component.css']
})
export class ConsultarProyectoEstudianteComponent implements OnInit {

  constructor(private proyectoService: ProyectoService, private modalService: NgbModal) { }

  codigoProyecto: number;
  proyecto: Proyecto;
  proyectos: Proyecto[];
  ngOnInit() {
    this.proyecto = new Proyecto;
  }

  consultar(){
    this.proyectoService.get().subscribe(result => {this.proyectos = result;});
    this.proyectos.forEach(key => {
      if(key.codigoProyecto==this.codigoProyecto)
      {
        this.proyecto = new Proyecto;
        this.proyecto = key;
        const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Resultado Operación";
        messageBox.componentInstance.message = 'Consulta exitosa';
      }
    });
  }
}
