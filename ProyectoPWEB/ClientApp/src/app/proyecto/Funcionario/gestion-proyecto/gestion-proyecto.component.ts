import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Proyecto } from '../../models/proyecto';

@Component({
  selector: 'app-gestion-proyecto',
  templateUrl: './gestion-proyecto.component.html',
  styleUrls: ['./gestion-proyecto.component.css']
})
export class GestionProyectoComponent implements OnInit {

  constructor(private personaService:ProyectoService) { }

  proyecto: Proyecto;
  referenciaEliminar: string;

  ngOnInit() {
    this.proyecto = new Proyecto;
  }
}
