import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private readonly baseUrl = 'https://articleapi.azurewebsites.net/categories';

  constructor(private readonly httpClient: HttpClient) {}

  getCategories(): Promise<Category[]> {
    return this.httpClient.get<Category[]>(this.baseUrl).toPromise();
  }

  getSubcategories(id: string): Promise<Category[]> {
    return this.httpClient.get<Category[]>(this.baseUrl + '/' + id).toPromise();
  }
}
