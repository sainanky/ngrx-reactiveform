import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Product } from '../product.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  products : Observable<Product[]>;
  constructor(private store : Store<AppState>) { 
    this.products = this.store.select(state => state.product);
  }

  ngOnInit(): void {
  }

  delete(index : number){
    let res = this.store.dispatch({
      type: 'DELETE_PRODUCT',
      index : index
    });
    alert(`deleted successfully`);
  }

}
