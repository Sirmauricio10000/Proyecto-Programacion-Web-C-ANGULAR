import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  usuario: string;
  contra: string;
  usuarios: Usuario[];
  abrirHomeEstudiante: boolean = false;
  abrirHomeFuncionario: boolean = false;
  cerrarLogin: boolean = true;
  existe: boolean = false;

  ngOnInit() {
  }

  ingresar(){
  }
}
