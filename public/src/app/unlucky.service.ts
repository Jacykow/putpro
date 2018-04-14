import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UnluckyService {

  constructor(private _http: HttpClient) { }
  getData() {
    return this._http.get('http://localhost:8000/question/?format=json');
  }
  sendData(data: number) {
    return this._http.post('http://127.0.0.1:8000/kappa/', data);
  }
  getEvent() {
    return this._http.get('http://localhost:8000/eventSendData/?format=json');
  }
}
