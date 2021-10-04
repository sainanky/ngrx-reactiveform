import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
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
            return { type: ActionTypes.AddSuccess, payload: res };
          }),
          catchError(() => of({ type: ActionTypes.AddFailure }))
        )
      )
    )
  )

  updateProduct$ = createEffect(() => 
    this.actions$.pipe(
      ofType(ActionTypes.UpdateItems),
      exhaustMap((action : any) => 
        this._dataService.updateProduct(action.product, action.id).pipe(
          map(res => {
            return { type: ActionTypes.UpdateSuccess, payload: res, id : action.id };
          }),
          catchError(() => of({ type: ActionTypes.UpdateFailue }))
        )
      )
    )
  )

  deleteProduct$ = createEffect(() => 
    this.actions$.pipe(
      ofType(ActionTypes.RemoveItems),
      exhaustMap((action : any) => 
        this._dataService.deleteProduct(action.id).pipe(
          map(res => {
            debugger
            return { type: ActionTypes.RemoveSuccess, payload: res, id : action.id };
          }),
          catchError(() => of({ type: ActionTypes.RemoveFailue }))
        )
      )
    )
  )

  constructor(
    private actions$: Actions,
    private _dataService: DataService
  ) {}
}