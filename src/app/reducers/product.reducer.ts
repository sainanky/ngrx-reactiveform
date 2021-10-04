import { Action } from '@ngrx/store';
import { Product } from './product.model';
import { ActionTypes } from '../reducers/product.action';

export function addProductReducer(state: Product[] = [], action : any) {
    let index;
  switch (action.type) {
    case ActionTypes.LoadSuccess:
        return [...action.payload]
    case ActionTypes.AddSuccess:
        return [...state, action.payload];
    case ActionTypes.UpdateSuccess:
        let uData = [...state];
        index = uData.findIndex(v => v.id == action.id);
        uData[index] = action.payload;
        return uData;
    case ActionTypes.RemoveSuccess:
        let nData = [...state];
        index = nData.findIndex(v => v.id == action.id);
        nData.splice(index, 1);
        return nData;
    default:
        return state;
    }
}