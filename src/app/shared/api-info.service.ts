import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppInfo } from '../models/app-info.model';

@Injectable({
  providedIn: 'root'
})
export class ApiInfoService {

  readonly apiInfoEndpoint = "http://localhost:8080/api/v1/app/info";

  constructor(private httpClient: HttpClient) { }

  getCommercialInfo(): Observable<AppInfo> {
    return this.httpClient.get<AppInfo>(this.apiInfoEndpoint);
  }
}
