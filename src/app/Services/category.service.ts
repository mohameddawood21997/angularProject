import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Category } from '../Models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _httpClient:HttpClient) { 



  }

  getCategories():Observable<Category[]>{
    return   this._httpClient.get<Category[]>(`${environment.baseUrl}/categories`);
   }
}
