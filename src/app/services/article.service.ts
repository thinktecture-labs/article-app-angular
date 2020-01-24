import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private readonly baseUrl = 'https://articleapi.azurewebsites.net/articles';

  constructor(private readonly httpClient: HttpClient) {}

  getAll(): Promise<Article[]> {
    return this.httpClient.get<Article[]>(this.baseUrl).toPromise();
  }

  search(query: string = ''): Promise<Article[]> {
    return this.httpClient.get<Article[]>(this.baseUrl, {params: {q: query}}).toPromise();
  }

  get(id: number): Promise<Article> {
    return this.httpClient.get<Article>(this.baseUrl + '/' + id).toPromise();
  }
}
