import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  getAllPErsons(): Observable<any> {
    return this.http.get("//localhost:8989/persons-list");
  }
}
