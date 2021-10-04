import { Action } from '@ngrx/store';
import { Product } from './product.model';
import { ActionTypes } from '../reducers/product.action';
export const ADD_PRODUCT = 'ADD_PRODUCT';

export function addProductReducer(state: Product[] = [], action : any) {
  switch (action.type) {
    case ActionTypes.LoadSuccess:
        return [...action.payload]
    case ActionTypes.Add:
        return [...state, action.payload];
    case ActionTypes.Update:
        let uData = [...state];
        uData[action.id] = action.payload;
        return uData;
    case ActionTypes.Remove:
        let nData = [...state];
        nData.splice(action.index, 1);
        return nData;
    default:
        return state;
    }
}