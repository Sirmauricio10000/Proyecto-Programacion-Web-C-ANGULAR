import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {
  resgistroEstudiante: boolean = false;
  registroAdministrador: boolean = false;

  constructor(private router: Router, private usuarioService: UsuarioService, private modalService: NgbModal) { }

  usuario: Usuario;
  pass: string;

  ngOnInit() {
    this.usuario = new Usuario;
  }

  atras(){
    this.router.navigate(['/']);
  }

  registrar(){

    if (this.usuario.contraUsuario ==this.pass){
      this.usuario.tipoDeUsuario="estudiante";
      this.usuarioService.post(this.usuario).subscribe(p => {
        if (p != null) {
        const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Resultado Operación";
        messageBox.componentInstance.message = 'Usuario registrado correctamente';
        this.usuario = p;
        }
      });
    } else{
      const messageBox = this.modalService.open(AlertModalComponent)
      messageBox.componentInstance.title = "Resultado Operación";
      messageBox.componentInstance.message = 'Error: Las contraseñas no coinciden';
    }
  }
}