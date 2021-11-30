import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Proyecto } from '../../models/proyecto';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';

@Component({
  selector: 'app-asignar-evaluadores',
  templateUrl: './asignar-evaluadores.component.html',
  styleUrls: ['./asignar-evaluadores.component.css']
})
export class AsignarEvaluadoresComponent implements OnInit {

  constructor(private proyectoService: ProyectoService , private usuarioService : UsuarioService,
    private modalService: NgbModal) { }

  codigoProyectoEvaluar: number;
  idEvaluador1: string;
  idEvaluador2: string;
  proyectos: Proyecto[];
  proyecto: Proyecto;
  filtro: string;
  filtro2: string;
  admins: Usuario[];
  admin: Usuario;

  ngOnInit() {
    this.proyectoService.get().subscribe(result => {
      this.proyectos = result;
      this.proyectos.forEach(p => {
        if (p.referenciaEvaluadorProyecto1 == null) p.referenciaEvaluadorProyecto1 = "Sin asignar";
        if (p.referenciaEvaluadorProyecto2 == null) p.referenciaEvaluadorProyecto2 = "Sin asignar";
      })
    });

    this.usuarioService.getAdmins().subscribe(result =>{
      this.admins = result;
    });
  }

  registrarEvaluador(){
    this.proyectoService.getByCode(this.codigoProyectoEvaluar).subscribe(result => {
      result.referenciaEvaluadorProyecto1 = this.idEvaluador1;
      result.referenciaEvaluadorProyecto2 = this.idEvaluador2;
      this.proyecto = new Proyecto;
      this.proyecto = result;

      this.proyectoService.put(this.proyecto).subscribe(p => {
        if (p != null) {
          const messageBox = this.modalService.open(AlertModalComponent)
          messageBox.componentInstance.title = "Resultado Operación";
          messageBox.componentInstance.message = 'Evaluadores asignados correctamente';
        }
      });
    });

  }
}
