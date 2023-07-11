import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../Interface/iproduct';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts(BuySell: number): Observable<IProduct[]> {
    return this.http.get('data/products.json').pipe(
      map((data:any) => {
        const productsArray: Array<IProduct> = [];
        for (const id in data) {
          if (data.hasOwnProperty(id) && data[id].BuySell === BuySell) {
            productsArray.push(data[id]);
          }
        }
        return productsArray;
      })
    );
  }
}
