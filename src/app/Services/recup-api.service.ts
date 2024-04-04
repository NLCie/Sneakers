import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecupApiService {
  
  apiUrl = 'https://api.api-ninjas.com/v1/exercises?muscle=';
  constructor(private http: HttpClient) { }

  getConfig(){
    const headers = new HttpHeaders()
    .set('X-Api-Key', 'wftifW30sprCPg6SKE8D9A==9PLSFO6z9PhFrEWZ')
    .set('content-type', 'application/json')
    
    const options = { headers: headers}
    return this.http.get(this.apiUrl, options);
  }
}
