import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, exhaustMap, map, mergeMap } from 'rxjs/operators';
import { DataService } from '../services/data.service';
import { ActionTypes } from './product.action';

@Injectable()
export class ShopEffects {

  loadProducts$ = createEffect(() => 
    this.actions$.pipe(
      ofType(ActionTypes.LoadItems),
      exhaustMap(() => 
        this._dataService.getAll().pipe(
          map(res => {
            console.log("called", res)
            return { type: ActionTypes.LoadSuccess, payload: res };
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  addProduct$ = createEffect(() => 
    this.actions$.pipe(
      ofType(ActionTypes.Add),
      exhaustMap((action : any) => 
        this._dataService.addProduct(action.product).pipe(
          map(res => {
            console.log("called action", action)
            return { type: ActionTypes.AddSuccess, payload: res };
          }),
          catchError(() => EMPTY)
        )
      )
    )
  )

  constructor(
    private actions$: Actions,
    private _dataService: DataService
  ) {}
}