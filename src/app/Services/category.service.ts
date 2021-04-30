import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category.model';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl: string = 'https://historyacoreapi20210430165528.azurewebsites.net/api/categories';
  constructor(private httpCleint: HttpClient) {}

  public getCategories() {
    return this.httpCleint.get<Category[]>(this.apiUrl);
  }

  public getCategorybyId(id: number) {

    let url = `${this.apiUrl}/${id}`;
    return this.httpCleint.get<Category>(url);
  }
}
