import { Action, createAction, props } from '@ngrx/store';
import { Product } from '../reducers/product.model';

export enum ActionTypes {
    Add = 'ADD_PRODUCT',
    UpdateItems = 'UPDATE_PRODUCT',
    RemoveItems = 'DELETE_PRODUCT',
    LoadItems = '[Products] Load items from server',
    LoadSuccess = '[Products] Load success',
    AddSuccess = '[Products] Add success',
    AddFailure = '[Products] Add Failure',
    UpdateSuccess = '[Products] Update success',
    UpdateFailue = '[Products] Update Failure',
    RemoveSuccess = '[Products] Delete success',
    RemoveFailue = '[Products] Delete Failure',
}

export const GetNewItems = createAction(ActionTypes.LoadItems);

export const AddProduct = createAction(ActionTypes.Add, props<{ product: Product }>());

export const UpdateProduct = createAction(ActionTypes.UpdateItems, props<{ product: Product, id : string }>());

export const DeleteProduct = createAction(ActionTypes.RemoveItems, props<{ id : string }>());