import { CATEGORIS_ACTION_TYPES } from './category.types';

const CATEGORIS_INITAIL_STATE = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesReduser = (state = CATEGORIS_INITAIL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIS_ACTION_TYPES.FETCH_CATEGORISE_START:
      return { ...state, isLoading: true };
    case CATEGORIS_ACTION_TYPES.FETCH_CATEGORISE_SUCCESS:
      return { ...state, categories: payload, isLoading: false };
    case CATEGORIS_ACTION_TYPES.FETCH_CATEGORISE_FAILED:
      return { ...state, error: payload, isLoading: false };
    default:
      return state;
  }
};
