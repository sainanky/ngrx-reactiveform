import { Action } from '@ngrx/store';
import { Product } from '../reducers/product.model';

export enum ActionTypes {
    Add = 'ADD_PRODUCT',
    Update = 'UPDATE_PRODUCT',
    Remove = 'DELETE_PRODUCT',
    LoadItems = '[Products] Load items from server',
    LoadSuccess = '[Products] Load success'
}

export class AddProduct implements Action {
    readonly type = ActionTypes.Add;
    constructor(public payload: Product) {}
}

export class GetItems implements Action {
    readonly type = ActionTypes.LoadItems;
}

export class RemoveProduct implements Action {
    readonly type = ActionTypes.Remove;
    constructor(public payload: Product) {}
}

export class LoadItems implements Action {
    readonly type = ActionTypes.LoadSuccess;
    constructor(public payload: Product[]) {}
}

export type ActionsUnion = AddProduct | RemoveProduct | LoadItems | GetItems;