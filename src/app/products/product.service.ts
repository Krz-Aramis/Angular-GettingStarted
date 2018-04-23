import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs/Observable' ;
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  private _productUrl = './api/products/products.json';

  constructor(private _http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this._productUrl)
                     .do(data => console.log('All: ' + JSON.stringify(data)))
                     .catch(this.handleError);
  }

  getProduct(id: number): Observable<IProduct> {
    /*TODO: replace this with InMemoryService pattern from Angular Tour of Heroes */
    return this.getProducts()
               .map((products: IProduct[]) => products.find(p => p.productId === id))
               .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse): Observable<string> {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
