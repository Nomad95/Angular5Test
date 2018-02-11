import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {Headers, Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ServiceService {

  private headers: Headers;

  constructor(private http: Http) {

  }

  getSomething(param: string): Observable<any> {
    let url = 'api/costam' + "?param= " + param;
    return this.http.get(url, {headers: this.headers});
  }
}
