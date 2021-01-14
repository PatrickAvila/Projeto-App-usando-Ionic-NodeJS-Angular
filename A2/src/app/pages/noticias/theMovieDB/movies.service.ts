import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private chave = "c38be33c8b27411fa66c853b2329f8c8"
  private caminhoPadrao = "https://api.themoviedb.org/3"

  constructor(public http:HttpClient) { }

  public getPopularMovies(page=1,language="eng"){
    let filmes = `https://newsapi.org/v2/everything?q=clube%20de%20regatas%20vasco%20da%20gama&apiKey=c38be33c8b27411fa66c853b2329f8c8`
    return this.http.get(filmes);
  }

}
