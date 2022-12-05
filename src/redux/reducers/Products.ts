import { AxiosError } from 'axios';
import update from 'immutability-helper';
import { AnyAction } from 'redux';

import { Product } from '@/types';

type ProductState = {
  products: Product[];
  loading: boolean;
  error?: AxiosError;
};

const initialState = {
  products: [],
  loading: false,
} as ProductState;

const ProductReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'PRODUCTS_FETCH':
      return update(state, {
        loading: { $set: true },
      });
    case 'PRODUCTS_FETCH_SUCCESS':
      return update(state, {
        products: { $set: action.payload.data },
        loading: { $set: false },
      });
    case 'PRODUCTS_FETCH_ERROR':
      return update(state, {
        loading: { $set: false },
        error: { $set: action.payload.error },
      });
    default:
      return state;
  }
};

export default ProductReducer;
