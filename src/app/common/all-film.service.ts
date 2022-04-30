import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AllFilmService {
  url: string = "http://www.omdbapi.com/?i="
  constructor(private http:HttpClient) { }

  allfilmDetails(event:any){
   return  this.http.get(this.url+event+environment.apiKey)
  }
}