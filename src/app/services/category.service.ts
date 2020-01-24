import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private readonly baseUrl = 'https://articleapi.azurewebsites.net/categories';

  constructor(private readonly httpClient: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.baseUrl);
  }

  getSubcategories(id: string): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.baseUrl + '/' + id);
  }
}
