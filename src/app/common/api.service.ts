import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = "http://www.omdbapi.com/"
  urlSlider: string = "http://www.omdbapi.com/?s=american"
  urlSlidertwo: string = "http://www.omdbapi.com/?s=superman"

  constructor(private http: HttpClient) { }
  private header = {
    headers: new HttpHeaders({
      "content-type": "text/plain; charset=utf-8"
    }),
  };

  requestFilm(event: string) {
    let appelFilm = "?s=" + event
    return this.http.get<any>(this.url + appelFilm + environment.apiKey, this.header)
  }

  apiSlider() {
    return this.http.get<any>(this.urlSlider + environment.apiKey, this.header)
  }
  apiSliderTwo() {
    return this.http.get<any>(this.urlSlidertwo + environment.apiKey, this.header)
  }
}
