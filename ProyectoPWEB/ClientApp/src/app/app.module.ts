import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './proyecto/Estudiante/nav-estudiante/nav-menu.component';
import { HomeComponent } from './proyecto/Estudiante/home-estudiante/home.component';
import { RegistroProyectoComponent } from './proyecto/Estudiante/registro-proyecto-estudiante/registro-proyecto.component';
import { ConsultaProyectoComponent } from './proyecto/Funcionario/consulta-proyecto-funcionario/consulta-proyecto.component';
import { PeticionesComponent } from './proyecto/Estudiante/realizar-peticiones/peticiones.component';
import { FooterComponent } from './proyecto/footer/footer.component';
import { GestionProyectoComponent } from './proyecto/Funcionario/gestion-proyecto/gestion-proyecto.component';
import { LoginComponent } from './proyecto/login/login.component';
import { RegistroUsuarioComponent } from './proyecto/registro-usuario/registro-usuario.component';
import { ConsultaPeticionesComponent } from './proyecto/Estudiante/consulta-peticiones/consulta-peticiones.component';
import { ConsultarPerfilComponent } from './proyecto/Estudiante/consultar-perfil/consultar-perfil.component';
import { ModificarPerfilComponent } from './proyecto/Estudiante/modificar-perfil/modificar-perfil.component';
import { ModificarProyectoComponent } from './proyecto/Estudiante/modificar-proyecto/modificar-proyecto.component';
import { CancelarInscripcionComponent } from './proyecto/Estudiante/cancelar-inscripcion/cancelar-inscripcion.component';
import { ConsultarProyectoEstudianteComponent } from './proyecto/Estudiante/consultar-proyecto-estudiante/consultar-proyecto-estudiante.component';
import { HomeFuncionarioComponent } from './proyecto/Funcionario/home-funcionario/home-funcionario.component';
import { NavFuncionarioComponent } from './proyecto/Funcionario/nav-funcionario/nav-funcionario.component';
import { ProyectoService } from './services/proyecto.service';
import { ConsultaProyectoPipe } from './proyecto/pipes/consulta-proyecto.pipe';
import { AsignarEvaluadoresComponent } from './proyecto/Funcionario/asignar-evaluadores/asignar-evaluadores.component';
import { AlertModalComponent } from './@base/alert-modal/alert-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConcederPermisosComponent } from './proyecto/Funcionario/conceder-permisos/conceder-permisos.component';
import { JwtInterceptor } from './services/jwtInterceptor';
import { AuthGuard } from './services/authGuard';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    RegistroProyectoComponent,
    ConsultaProyectoComponent,
    PeticionesComponent,
    FooterComponent,
    GestionProyectoComponent,
    LoginComponent,
    RegistroUsuarioComponent,
    ConsultaPeticionesComponent,
    ConsultarPerfilComponent,
    ModificarPerfilComponent,
    ModificarProyectoComponent,
    CancelarInscripcionComponent,
    ConsultarProyectoEstudianteComponent,
    HomeFuncionarioComponent,
    NavFuncionarioComponent,
    ConsultaProyectoPipe,
    AsignarEvaluadoresComponent,
    AlertModalComponent,
    ConcederPermisosComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'app-home', component: HomeComponent, canActivate: [AuthGuard]},
      { path: 'app-registro-proyecto', component: RegistroProyectoComponent, canActivate: [AuthGuard]},
      { path: 'app-consulta-proyecto', component: ConsultaProyectoComponent, canActivate: [AuthGuard]},
      { path: 'app-peticiones', component: PeticionesComponent, canActivate: [AuthGuard]},
      { path: 'app-gestion-proyecto', component: GestionProyectoComponent, canActivate: [AuthGuard]},
      { path: 'app-registro-usuario', component: RegistroUsuarioComponent},
      { path: 'app-consulta-peticiones', component: ConsultaPeticionesComponent, canActivate: [AuthGuard]},
      { path: 'app-consultar-perfil', component: ConsultarPerfilComponent, canActivate: [AuthGuard]},
      { path: 'app-modificar-perfil', component: ModificarPerfilComponent, canActivate: [AuthGuard]},
      { path: 'app-cancelar-inscripcion', component: CancelarInscripcionComponent, canActivate: [AuthGuard]},
      { path: 'app-modificar-proyecto', component: ModificarProyectoComponent, canActivate: [AuthGuard]},
      { path: 'app-consultar-proyecto-estudiante', component: ConsultarProyectoEstudianteComponent, canActivate: [AuthGuard]},
      { path: 'app-home-funcionario', component: HomeFuncionarioComponent, canActivate: [AuthGuard]},
      { path: 'app-nav-funcionario', component: NavFuncionarioComponent, canActivate: [AuthGuard]},
      { path: 'app-asignar-evaluadores', component: AsignarEvaluadoresComponent, canActivate: [AuthGuard]},
      { path: 'app-conceder-permisos', component: ConcederPermisosComponent, canActivate: [AuthGuard]},
      { path: '', component: LoginComponent, pathMatch: 'full' },
    ]),
  ],
  entryComponents:[AlertModalComponent],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
