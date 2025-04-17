import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiURL='https://newsapi.org/v2/everything?q=tesla&from=2025-03-01&sortBy=publishedAt&apiKey=eb4525308a684e8c9b843990d70629c9';

  constructor(private http: HttpClient) { }
  getnews(): Observable<any>{
    return this.http.get(this.apiURL);
  }
}
