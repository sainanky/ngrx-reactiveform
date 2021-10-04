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
        this.fruitsService.getAll().pipe(
          map(fruits => {
            console.log("called", fruits)
            return { type: ActionTypes.LoadSuccess, payload: fruits };
          }),
          catchError(() => EMPTY)
        )
      )
    )
  )

  loadFruits$ = this.actions$.pipe(
    ofType(ActionTypes.LoadItems),
    mergeMap(() =>
      this.fruitsService.getAll().pipe(
        map(fruits => {
          console.log("called", fruits)
          return { type: ActionTypes.LoadSuccess, payload: fruits };
        }),
        catchError(() => EMPTY)
      )
    )
  );

  constructor(
    private actions$: Actions,
    private fruitsService: DataService
  ) {}
}