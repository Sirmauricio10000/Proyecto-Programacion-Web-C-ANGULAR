import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Proyecto } from '../../models/proyecto';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-asignar-evaluadores',
  templateUrl: './asignar-evaluadores.component.html',
  styleUrls: ['./asignar-evaluadores.component.css']
})
export class AsignarEvaluadoresComponent implements OnInit {

  constructor(private proyectoService: ProyectoService , private usuarioService : UsuarioService) { }

  codigoProyectoEvaluar: number;
  idEvaluador1: string;
  idEvaluador2: string;
  proyectos: Proyecto[];
  proyecto: Proyecto;
  filtro: string;
  filtro2: string;

  ngOnInit() {
    this.proyectoService.get().subscribe(result => {this.proyectos = result;});
  }

  registrarEvaluador(){
    this.proyectoService.getByCode(this.codigoProyectoEvaluar).subscribe(result => {
      result.referenciaEvaluadorProyecto1 = this.idEvaluador1;
      result.referenciaEvaluadorProyecto2 = this.idEvaluador2;
      result.referenciaInvestigadorPrincipal = result.investigadorPrincipal.userName;
      result.referenciaInvestigadorSecundario = result.investigadorSecundario.userName;
      this.proyecto = new Proyecto;
      this.proyecto = result;
    });

    this.proyectoService.put(this.proyecto).subscribe(p => {
      if (p != null) {
      this.proyecto = p;
      }
    });
  }



}
