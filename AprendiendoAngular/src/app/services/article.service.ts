// Suponiendo que getArticles() devuelve un Observable<Article[]>
import { Injectable, inject } from '@angular/core';
import { Article } from '../models/article';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
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
}
