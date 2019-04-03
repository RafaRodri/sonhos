import {Dream} from '../../model/dream.model';
import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable()
export class DreamService {
    constructor(private http: HttpClient) {}

    getDreams(category?: string): Observable<Dream[]>{
        let params: HttpParams = undefined

        if (category){
            //instancia objeto do tipo HttpParams
            //o objeto HttpParams, é imutável, ou seja, sempre que setar um parâmetro, é adicionado um valor,
            //e é criado uma cópia, retornando uma instância de HttpParams
            //logo, o seguinte trecho não funcionaria:
            //params = new HttpParams()
            //params.set('q', search)
            params = new HttpParams().append('category', category)
            //é possível utilizar o método set() ou append(), para passar valor
        }

        return this.http.get<Dream[]>(`${environment.api}/dream`,{params: params})
    }

    getDream(id: string): Observable<Dream>{
        let params: HttpParams = undefined

        params = new HttpParams().append('id', id)

        return this.http.get<Dream>(`${environment.api}/dream`,{params: params})
            .pipe(map(x => x[0]));
    }
}