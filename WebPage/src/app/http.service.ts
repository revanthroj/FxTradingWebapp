import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  Url: string = 'http://localhost:8080/';
  constructor(private http: HttpClient) {}
  getPost() {
    return this.http.get(`${this.Url}printTrade`);
  }
  postRecord(obj: any) {
    return this.http.post(`${this.Url}bookTrade`, obj);
  }
}
