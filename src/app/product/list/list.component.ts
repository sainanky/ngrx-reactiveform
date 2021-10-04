import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { DeleteProduct, GetNewItems } from 'src/app/reducers/product.action';
import { Product } from 'src/app/reducers/product.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  products$ = this.store.select('product');
  constructor(private store : Store<AppState>) { 
    this.store.dispatch(GetNewItems());
  }

  ngOnInit(): void {
    
  }

  delete(id : string){
    this.store.dispatch(DeleteProduct({id : id}))
  }

}
