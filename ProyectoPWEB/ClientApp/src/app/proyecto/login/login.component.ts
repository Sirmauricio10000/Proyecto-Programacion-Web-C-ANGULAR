import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';
import { AuthenticationService } from 'src/app/services/AuthenticationService';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private modalService: NgbModal,
     private router: Router) { }

  userName: string;
  password: string;

  ngOnInit() {
    this.authenticationService.logout();
  }

  ingresar(){
    this.authenticationService.login(this.userName, this.password).subscribe(p => {
      if (p != null) {
        const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Inicio de sesión exitoso";
        messageBox.componentInstance.message = 'Bienvenido ' + p.persona.nombre;
        if (p.userType == "estudiante")this.router.navigate(['/app-home']);
        else this.router.navigate(['/app-home-funcionario']);
      }
    });
  }
}
