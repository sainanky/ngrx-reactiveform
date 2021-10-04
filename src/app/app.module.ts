import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductModule } from './product/product.module';
import { addProductReducer } from './reducers/product.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { ShopEffects } from './reducers/product.effect';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';

const routes : Routes = [
  {
    path : "",
    redirectTo : "product",
    pathMatch : "full"
  },
  {
    path : "product",
    loadChildren : () => ProductModule
  }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), 
    BrowserAnimationsModule, HttpClientModule,
    StoreModule.forRoot({product : addProductReducer}), EffectsModule.forRoot([ShopEffects])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
