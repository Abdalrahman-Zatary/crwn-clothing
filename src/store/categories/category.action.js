import { CATEGORIS_ACTION_TYPING } from './category.types';
import { createAction } from '../../utils/reducer/reducer.utils';

export const setCategories = (categoriesArray) => {
  return createAction(CATEGORIS_ACTION_TYPING.SET_CATEGORIS, categoriesArray);
};
