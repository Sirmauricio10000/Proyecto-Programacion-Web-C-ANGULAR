import { HttpClient} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Persona } from '../proyecto/models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  baseUrl: string;
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService) {
    this.baseUrl = baseUrl;
  }

  get(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.baseUrl + 'api/Persona')
      .pipe(tap(),
        catchError(this.handleErrorService.handleError<Persona[]>('Consulta Persona', null))
      );
  }

  post(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.baseUrl + 'api/Persona', persona)
      .pipe(tap(),
        catchError(this.handleErrorService.handleError<Persona>('Registrar Persona', null))
      );
  }

  put(persona: Persona): Observable<Persona> {
    return this.http.put<Persona> (this.baseUrl + 'api/Persona', persona)
    .pipe(tap(),
      catchError(this.handleErrorService.handleError<Persona>('Actualizar Persona', null))
    );
  }
}