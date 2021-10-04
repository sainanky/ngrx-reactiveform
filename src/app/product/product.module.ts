import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { StoreModule } from '@ngrx/store';
import { addProductReducer } from '../reducers/product.reducer';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { LayoutModule } from '../layout/layout.module';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes : Routes = [
  {
    path : "",
    redirectTo : "list",
    pathMatch : "full"
  },
  {
    path : "",
    component : ProductComponent,
    children : [
      {
        path : "list",
        component : ListComponent
      },
      {
        path : "create",
        component : CreateComponent
      }
    ]
  }
];

@NgModule({
  declarations: [ProductComponent, ListComponent, CreateComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes), LayoutModule, FormsModule, ReactiveFormsModule
  ]
})
export class ProductModule { }
