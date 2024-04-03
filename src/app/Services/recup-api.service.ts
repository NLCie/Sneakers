import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecupApiService {

  apiUrl = 'https://api.api-ninjas.com/v1/exercises?muscle=';
  constructor(private http: HttpClient) { }

  getConfig(){
    return this.http.get(this.apiUrl);
  }
}
