// Suponiendo que getArticles() devuelve un Observable<Article[]>
import { Injectable, inject } from '@angular/core';
import { Article } from '../models/article';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Global } from './global';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  url = Global.url;
  private _http: HttpClient = inject(HttpClient);

  getArticles(last: any = null): Observable<Article[] | any> {
    const endpoint = last ? 'articles/true' : 'articles';
    return this._http.get<Article[]>(`${this.url}${endpoint}`);
  }

  getArticle(articleId: any): Observable<any> {
    return this._http.get(this.url + 'article/' + articleId)
  }

  search(searchString: any): Observable<any> {
    return this._http.get(this.url + 'search/' + searchString)
  }

  create(article: any): Observable<any> {
    let params = JSON.stringify(article)
    let headers = new HttpHeaders().set('Content-Type', 'application/json')

    return this._http.post(this.url + 'save', params, { headers: headers })
  }
}
