import { Injectable } from '@angular/core';
import { Http  } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SerIndicadoresService {

  constructor(private http:Http) { }

  getindicador(): Observable<any> {
    return this.http.get('http://mindicador.cl/api');
  }
}
