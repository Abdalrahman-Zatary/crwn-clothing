import { CATEGORIS_ACTION_TYPING } from './category.types';

const CATEGORIS_INITAIL_STATE = {
  categories: [],
};

export const categoriesReduser = (state = CATEGORIS_INITAIL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIS_ACTION_TYPING.SET_CATEGORIS:
      return {
        ...state,
        categories: payload,
      };
    default:
      return state;
  }
};
