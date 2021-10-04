import { Product } from "./reducers/product.model";

export interface AppState {
  readonly product: Product[];
}