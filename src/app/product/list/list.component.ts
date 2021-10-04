import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { GetItems, GetNewItems } from 'src/app/reducers/product.action';
import { Product } from 'src/app/reducers/product.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  // products : Observable<Product[]>;
  products$ = this.store.select('product');
  constructor(private store : Store<AppState>) { 
    // this.products = this.store.select(state => state.product);
    this.store.dispatch(GetNewItems());
  }

  ngOnInit(): void {
    console.log("dispatch")
  }

  delete(index : number){
    let res = this.store.dispatch({
      type: 'DELETE_PRODUCT',
      index : index
    });
    alert(`deleted successfully`);
  }

}
