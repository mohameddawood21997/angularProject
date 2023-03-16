import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _httpClient:HttpClient) { }


  
  getAllProduct():Observable<Product[]>{
  return   this._httpClient.get<Product[]>(`${environment.baseUrl}/products`);
   }
   getProductById(id:string|null):Observable<Product>{
    return   this._httpClient.get<Product>(`http://localhost:3000/products/${id}`);
   }

  //  saveProduct():Observable<Product[]>{
  //   return this._httpClient.post<Product>(`http://localhost:3000/products/${id}`);
  //  }

   getProductByCatId(catId:string):Observable<Product[]>{
    return   this._httpClient.get<Product[]>(`${environment.baseUrl}/products/${catId}`);
   }

   saveNewProduct(prd:Product):Observable<Product>{
    console.log(prd);
    
    return   this._httpClient.post<Product>(`${environment.baseUrl}/products`,prd,{
      headers:new HttpHeaders({
        'accept':'application/json'
      })
    }).pipe(retry(2))
   }

   updateProducts(prd:Product,prdId:string|null):Observable<Product>{
    console.log(prdId);
    
    return   this._httpClient.put<Product>(`${environment.baseUrl}/products/${prdId}`,prd,{
      headers:new HttpHeaders({
        'accept':'application/json'
      })
    }).pipe(retry(2))
   }
   deleteProducts(prdId:string):Observable<Product>{
    console.log(prdId);
    
    return   this._httpClient.delete<Product>(`${environment.baseUrl}/products/${prdId}`,{
      headers:new HttpHeaders({
        'accept':'application/json'
      })
    }).pipe(retry(2))
   }


  //  editProduct(prd:Product):Observable<Product>{
  //   return   this._httpClient.post<Product>(`${environment.baseUrl}/products`,prd,{
  //     headers:new HttpHeaders({
  //       'accept':'application/json'
  //     })
  //   }).pipe(retry(2))
  //  }
}
