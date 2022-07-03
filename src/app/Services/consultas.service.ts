import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consultas } from '../Models/consultas';
import { environment } from "../../environments/environment"

@Injectable({
    providedIn: 'root'
})
export class ConsultaService {
   
    url = environment.urlServer;

    constructor(private http: HttpClient) { }


    guardarConsulta(consulta: Consultas): Observable<any>   {
        return this.http.post(this.url, consulta);


    }
}