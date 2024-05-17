import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment.development';
import { Observable, catchError, throwError } from 'rxjs';
import { AnimeDetail } from './animeDetail';

@Injectable({
  providedIn: 'root'
})

export class AnimeService {
  private baseUrl = environment.baseUrl;

constructor(private http: HttpClient) { }

getAnimes(): Observable<AnimeDetail[]> {
  return this.http.get<AnimeDetail[]>(this.baseUrl)
  .pipe(
    catchError((err) => throwError(() => new Error('error en el servicio')))
  );
}
}
