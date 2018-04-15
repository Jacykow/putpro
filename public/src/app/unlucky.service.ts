import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UnluckyService {

  constructor(private _http: HttpClient) { }
  getData() {
    return this._http.get('http://webtest220180414052420.azurewebsites.net/api/kappa');
  }
  sendData(data: number) {
    return this._http.post('http://127.0.0.1:8000/kappa/', data);
  }
  getRandomEvent() {
    return this._http.get('https://webtest220180414052420.azurewebsites.net/api/event/random');
  }
  getActivities() {
    return this._http.get('http://localhost:8000/eventSendDataObrazki/?format=json');
  }
}
