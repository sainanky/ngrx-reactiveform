import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from '../reducers/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http : HttpClient) { }
  url : string = `${environment.url}/products`;

  getAll() {
    return this._http.get(this.url);
  }

  addProduct(body : Product){
    return this._http.post(this.url, body);
  }

  updateProduct(body : Product, id : string){
    return this._http.put(this.url + '/' + id, body);
  }

  deleteProduct(id : string){
    return this._http.delete(this.url + '/' + id);
  }

  getProductById(id : string){
    return this._http.get(this.url + '/' + id);
  }
}
