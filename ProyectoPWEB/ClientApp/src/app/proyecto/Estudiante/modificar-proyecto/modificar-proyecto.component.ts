import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Proyecto } from '../../models/proyecto';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-modificar-proyecto',
  templateUrl: './modificar-proyecto.component.html',
  styleUrls: ['./modificar-proyecto.component.css']
})
export class ModificarProyectoComponent implements OnInit {

  constructor(private proyectoService: ProyectoService, private modalService:NgbModal) { }

  usuario: Usuario;
  reference: string;
  proyectoViejo: Proyecto;
  proyectoNuevo: Proyecto;

  ngOnInit() {
    this.usuario = new Usuario;
    
    this.proyectoNuevo = new Proyecto;
    this.usuario = JSON.parse(localStorage.getItem("currentUser"));
    this.reference = this.usuario.userName;

    this.proyectoViejo = new Proyecto;
    this.proyectoService.getOne(this.reference).subscribe(result => {
      this.proyectoViejo = result;
    });
  }

  modificar(){

    this.proyectoViejo.tituloProyecto = this.proyectoNuevo.tituloProyecto;
    this.proyectoViejo.grupoDeInvestigacion = this.proyectoNuevo.grupoDeInvestigacion;
    this.proyectoViejo.areaProyecto = this.proyectoNuevo.areaProyecto;
    this.proyectoViejo.lineaDeInvestigacion = this.proyectoNuevo.lineaDeInvestigacion;
    this.proyectoViejo.tipoProyecto = this.proyectoNuevo.tipoProyecto;


    this.proyectoService.put(this.proyectoViejo).subscribe(result => {
      if (result != null) {
      const messageBox = this.modalService.open(AlertModalComponent)
      messageBox.componentInstance.title = "Mensaje";
      messageBox.componentInstance.message = 'Proyecto modificado correctamente';
      }
    })
  }

}

