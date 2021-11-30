import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Proyecto } from '../../models/proyecto';

@Component({
  selector: 'app-calificar-proyectos',
  templateUrl: './calificar-proyectos.component.html',
  styleUrls: ['./calificar-proyectos.component.css']
})
export class CalificarProyectosComponent implements OnInit {
  filtro: string;
  constructor(private proyectoService: ProyectoService, private modalService: NgbModal) { }

  proyectos: Proyecto[];
  proyecto: Proyecto;
  codigo: number;
  calificacion: string;
  comentarios: string;


  ngOnInit() {
    this.proyectoService.get().subscribe(result => {this.proyectos = result;});
  }

  calificar(){
    this.proyectoService.getByCode(this.codigo).subscribe(result => {
      this.proyecto = result;
      this.proyecto.estadoProyecto = this.calificacion;
      this.proyecto.comentariosProyecto = this.comentarios;

      this.proyectoService.put(this.proyecto).subscribe(p=>{
        if(p!=null){
          const messageBox = this.modalService.open(AlertModalComponent)
          messageBox.componentInstance.title = "Resultado Operación";
          messageBox.componentInstance.message = 'Proyecto calificado correctamente';
        }
      })
    });
  }

}
