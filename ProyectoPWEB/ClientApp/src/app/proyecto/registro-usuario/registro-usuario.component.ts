import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Persona } from '../models/persona';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {
  resgistroEstudiante: boolean = false;
  registroAdministrador: boolean = false;

  constructor(private router: Router, private usuarioService: UsuarioService, private modalService: NgbModal) { }

  formularioNombre = new FormGroup({
    Nombre1: new FormControl('', Validators.required),
    Nombre2: new FormControl('', Validators.required),
    Nombre3: new FormControl('', Validators.required),
    Nombre4: new FormControl('', Validators.required),
    Nombre5: new FormControl('', Validators.required),
    Nombre6: new FormControl('', Validators.required),
    Nombre7: new FormControl('', Validators.required),
  });

  usuario: Usuario;
  persona: Persona;

  ngOnInit() {
    this.usuario = new Usuario;
    this.persona = new Persona;
  }

  atras() {
    this.router.navigate(['/']);
  }

  registrar() {

    this.usuario.userType = "estudiante";
    this.persona.identificacion = this.usuario.userName;
    this.usuario.persona = this.persona;

    this.usuarioService.post(this.usuario).subscribe(p => {
      if (p != null) {
        const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Resultado Operación";
        messageBox.componentInstance.message = 'El usuario ' + this.usuario.userName + ' ha sido registrado correctamente';
        this.usuario = p;
      }
    });
  }
}
