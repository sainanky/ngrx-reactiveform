import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Product } from '../product.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private store : Store<AppState>, private fb : FormBuilder, private _router : Router,
    private _route : ActivatedRoute) {
      this.products = this.store.select(state => state.product);
    }
  products : Observable<Product[]>
  createForm : FormGroup = this.fb.group({});
  dataId : string = '';

  ngOnInit(): void {
    this.createForm = this.fb.group({
      code : new FormControl('', [Validators.required]),
      name : new FormControl('', [Validators.required]),
      price : new FormControl('', [Validators.required]),
      description : new FormControl(''),
    });
    this._route.queryParams.subscribe(res=>{
      if(res['id']){
        this.dataId = res['id'];
        this.getProductDetails(this.dataId);
      }
    });
  }

  get code(){
    return this.createForm.controls.code;
  }
  get name(){
    return this.createForm.controls.name;
  }
  get price(){
    return this.createForm.controls.price;
  }

  addProduct(values : Product) {
    this.store.dispatch({
      type: 'ADD_PRODUCT',
      payload: <Product> {
       ...values
      }
    });
    this._router.navigateByUrl('/product/list');
    alert(`created successfully`);
  }

  updateProduct(values : Product) {
    this.store.dispatch({
      type: 'UPDATE_PRODUCT',
      id : this.dataId,
      payload: <Product> {
       ...values
      }
    });
    this._router.navigateByUrl('/product/list');
    alert(`updated successfully`);
  }

  getProductDetails(dataId : string){
    this.store.select(state => state.product).subscribe((res : Product[])=>{
      let data : Product = res[Number(dataId)];
      this.createForm.controls.code.setValue(data.code);
      this.createForm.controls.name.setValue(data.name);
      this.createForm.controls.price.setValue(data.price);
      this.createForm.controls.description.setValue(data.description);
    });
  }
}
