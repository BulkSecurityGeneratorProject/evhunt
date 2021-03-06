import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs/Observable";

@Injectable()
export class OfferService {

  constructor(private http: HttpClient) {}

  getOfferList(): Observable<any>{
    return this.http.get<any>('//localhost:8080//findAllPostes');
  }
}
