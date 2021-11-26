import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Proyecto } from '../../models/proyecto';

@Component({
  selector: 'app-modificar-proyecto',
  templateUrl: './modificar-proyecto.component.html',
  styleUrls: ['./modificar-proyecto.component.css']
})
export class ModificarProyectoComponent implements OnInit {

  constructor(private proyectoService: ProyectoService, private modalService:NgbModal) { }

  codigoProyecto: number;
  linkProyecto: string;
  tituloProyecto: string;
  lineaDeInvestigacion: string;
  grupoDeInvestigacion: string;
  tipoProyecto: string;
  areaProyecto: string;

  proyecto: Proyecto;
  proyectos: Proyecto[];
  ngOnInit() {
    this.proyectoService.get().subscribe(result => {this.proyectos = result;});
  }

  modificar(){
   /* this.proyectoService.get().subscribe(result => {this.proyectos = result;});

    this.proyectos.forEach(key => {
      if(key.codigoProyecto==this.codigoProyecto)
      {
        key.grupoDeInvestigacion = this.grupoDeInvestigacion;
        key.linkProyecto = this.linkProyecto;
        key.tituloProyecto = this.tituloProyecto;
        key.lineaDeInvestigacion = this.lineaDeInvestigacion;
        key.tipoProyecto = this.tipoProyecto;
        key.areaProyecto = this.areaProyecto;
        key.referenciaInvestigadorPrincipal = key.investigadorPrincipal.identificacionUsuario;
        key.referenciaInvestigadorSecundario = key.investigadorSecundario.identificacionUsuario;
        if (key.referenciaEvaluadorProyecto1 != null){
          key.referenciaEvaluadorProyecto1 = key.evaluadorProyecto1.identificacionUsuario;
        }
        if (key.referenciaEvaluadorProyecto2 != null){
          key.referenciaEvaluadorProyecto2 = key.evaluadorProyecto2.identificacionUsuario;
        }
        this.proyecto = new Proyecto;
        this.proyecto = key;
      }
    });
    this.proyectoService.put(this.proyecto).subscribe(p => {
      if (p != null) {
      const messageBox = this.modalService.open(AlertModalComponent)
      messageBox.componentInstance.title = "Resultado Operación";
      messageBox.componentInstance.message = 'Proyecto modificado correctamente';
      this.proyecto = p;
      }
    }); */
  }
}
