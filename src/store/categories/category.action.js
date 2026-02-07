import { CATEGORIS_ACTION_TYPES } from './category.types';
import { createAction } from '../../utils/reducer/reducer.utils';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'

export const fetchCategoriesStart = () => 
  createAction(CATEGORIS_ACTION_TYPES.FETCH_CATEGORISE_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
  createAction(CATEGORIS_ACTION_TYPES.FETCH_CATEGORISE_SUCCESS, categoriesArray);

export const fetchCategoriesFailed = (error) =>
  createAction(CATEGORIS_ACTION_TYPES.FETCH_CATEGORISE_SUCCESS, error);

export const fetchCategoriesAsync = () => async (disparch) => {
  disparch(fetchCategoriesStart());
  try {
    const categoriesArray = await getCategoriesAndDocuments('categories');
    disparch(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    disparch(fetchCategoriesFailed(error));
  }
};
