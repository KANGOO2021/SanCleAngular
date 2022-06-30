import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consultas } from '../Models/consultas';

@Injectable({
    providedIn: 'root'
})
export class ConsultaService {

    url = 'https://server-react-angular.herokuapp.com/';

    constructor(private http: HttpClient) { }


    guardarConsulta(consulta: Consultas): Observable<any>   {
        return this.http.post(this.url, consulta);


    }
}