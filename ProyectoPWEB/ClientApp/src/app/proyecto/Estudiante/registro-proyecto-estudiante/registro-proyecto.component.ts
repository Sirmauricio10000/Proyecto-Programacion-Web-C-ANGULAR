import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Proyecto } from '../../models/proyecto';

@Component({
  selector: 'app-registro-proyecto',
  templateUrl: './registro-proyecto.component.html',
  styleUrls: ['./registro-proyecto.component.css']
})
export class RegistroProyectoComponent implements OnInit {

  constructor(private proyectoService: ProyectoService, private modalService: NgbModal) { }

  proyecto: Proyecto;
  ngOnInit() {
    this.proyecto = new Proyecto;
  }

  registrar() {
    this.proyectoService.post(this.proyecto).subscribe(p => {
      if (p != null) {
      const messageBox = this.modalService.open(AlertModalComponent)
      messageBox.componentInstance.title = "Resultado Operación";
      messageBox.componentInstance.message = 'Proyecto registrado correctamente';
      this.proyecto = p;
      }
    });
  }
}
