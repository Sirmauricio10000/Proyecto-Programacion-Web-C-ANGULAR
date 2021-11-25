import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-consultar-perfil',
  templateUrl: './consultar-perfil.component.html',
  styleUrls: ['./consultar-perfil.component.css']
})
export class ConsultarPerfilComponent implements OnInit {


  usuarios: Usuario[];
  id: string;
  nombre: string;
  correo: string;
  telefono: string;
  claveAcceso: string;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  consultar(){
    this.usuarioService.get().subscribe(result => {
      this.usuarios = result;
    })

    this.usuarios.forEach(key => {
      if(key.identificacionUsuario==this.id)
      {
        this.nombre = key.nombreUsuario;
        this.correo = key.correoUsuario;
        this.telefono = key.telefonoUsuario;
      }
    });
  }

}
