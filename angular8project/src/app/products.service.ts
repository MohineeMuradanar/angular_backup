import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  uri = 'http://localhost:4000/products';

  constructor(private http: HttpClient) { }

addProduct(ProductName: any, ProductDescription: any, ProductPrice: any) {
  const obj = {
ProductName,
ProductDescription,
ProductPrice

  };
  console.log(obj);
  this.http.post(`${this.uri}/add`, obj).subscribe(res => console.log('Done'));
  
}

}
