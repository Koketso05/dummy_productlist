import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IProduct } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<IProduct[]> {
    return this.http.get("https://dummyjson.com/products/category/smartphones").pipe(
      map((data: any) => {
        const _products: IProduct[] = data.products;
        _products.filter(product => product.price < 500 )

        return _products.filter(product => product.price < 500 );
      })
    );
  }
}
