import { HttpClient } from '@angular/common/http';
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

  put(persona: Persona): Observable<Persona> {
    return this.http.put<Persona>(this.baseUrl + 'api/Persona', persona)
      .pipe(tap(),
        catchError(this.handleErrorService.handleError<Persona>('Actualizar Persona', null))
      );
  }
}