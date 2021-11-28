import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-consultar-perfil-funcionario',
  templateUrl: './consultar-perfil-funcionario.component.html',
  styleUrls: ['./consultar-perfil-funcionario.component.css']
})
export class ConsultarPerfilFuncionarioComponent implements OnInit {

  usuario: Usuario;

  constructor() { }

  ngOnInit() {
    this.usuario = new Usuario;
    this.usuario = JSON.parse(localStorage.getItem("currentUser"));
  }
}