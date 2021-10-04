import { Product } from './../product/product.model';
import { Action } from '@ngrx/store';

export const ADD_PRODUCT = 'ADD_PRODUCT';

export function addProductReducer(state: Product[] = [], action : any) {
  switch (action.type) {
    case 'ADD_PRODUCT':
        return [...state, action.payload];
    case 'UPDATE_PRODUCT':
        let uData = [...state];
        uData[action.id] = action.payload;
        return uData;
    case 'DELETE_PRODUCT':
        let nData = [...state];
        nData.splice(action.index, 1);
        return nData;
    default:
        return state;
    }
}