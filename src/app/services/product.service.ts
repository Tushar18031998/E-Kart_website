import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../data-type';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  addProduct(data: product) {
    console.log('Service called');
    return this.http.post('http://localhost:3000/Products', data);
  }
  productList() {
    return this.http.get<product[]>('http://localhost:3000/Products');
  }
  deleteProduct(id: number) {
    return this.http.delete(`http://localhost:3000/Products/${id}`);
  }
  getProduct(id: string) {
    return this.http.get<product>(`http://localhost:3000/Products/${id}`);
  }
  updateProduct(product:product){
    console.log(product)
   return this.http.put<product>(`http://localhost:3000/Products/${product.id}`,product)
  }
  popularProducts(){
    return this.http.get<product[]>('http://localhost:3000/Products?_limit=5');
  }
  searchProducts(query:string){
    return this.http.get<product[]>(`http://localhost:3000/Products?q=${query}`);
  }
  trendyProducts(){
    return this.http.get<product[]>('http://localhost:3000/Products?_limit=8');
  }
}
