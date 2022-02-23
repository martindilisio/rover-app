import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { data, photos, rover } from '../types/interfaces';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlParams = '/photos?sol=1000&api_key=DEMO_KEY'; // aditional parameters (not change for this example)
  private url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/'; // main url

  constructor(public http: HttpClient) { }

  // Note: for this test, it will return a maximun of 20 records.
  getRoverData(name: string) {
    return this.http.get<data>(`${ this.url }${ name }${ this.urlParams}`)
      .pipe( 
          map(result => result.photos.slice(0, result.photos.length > 20 ? 20 : result.photos.length) ));
  }
}
