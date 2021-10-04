import { Action, createAction, props } from '@ngrx/store';
import { Product } from '../reducers/product.model';

export enum ActionTypes {
    Add = 'ADD_PRODUCT',
    Update = 'UPDATE_PRODUCT',
    Remove = 'DELETE_PRODUCT',
    LoadItems = '[Products] Load items from server',
    LoadSuccess = '[Products] Load success',
    AddSuccess = '[Products] Add success',
}

export const GetNewItems = createAction(ActionTypes.LoadItems);

export const AddProduct = createAction(ActionTypes.Add, props<{ product: Product }>());