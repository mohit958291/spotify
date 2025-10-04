import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Products {
  constructor(private http:HttpClient){}

    getProductList(){
      const url="https://dummyjson.com/products";
      return this.http.get(url);
    
  }
}
