import {
  CATEGORIS_ACTION_TYPES,
  Category,
} from './category.types';

import { createAction, Action, ActionWithPayload, withMatcher } from '../../utils/reducer/reducer.utils';

export type FetchCategoriesStart =
  Action<CATEGORIS_ACTION_TYPES.FETCH_CATEGORISE_START>;

export type FetchCategoriesSuccess = ActionWithPayload<
  CATEGORIS_ACTION_TYPES.FETCH_CATEGORISE_SUCCESS,
  Category[]
>;

export type FetchCategoriesFailde = ActionWithPayload<
  CATEGORIS_ACTION_TYPES.FETCH_CATEGORISE_FAILED,
  Error
>;

export type CategoriesAction =
  | FetchCategoriesStart
  | FetchCategoriesSuccess
  | FetchCategoriesFailde;

export const fetchCategoriesStart = withMatcher(
  (): FetchCategoriesStart =>
    createAction(CATEGORIS_ACTION_TYPES.FETCH_CATEGORISE_START)
);

export const fetchCategoriesSuccess = withMatcher(
  (categoriesArray: Category[]): FetchCategoriesSuccess =>
  createAction(
    CATEGORIS_ACTION_TYPES.FETCH_CATEGORISE_SUCCESS,
    categoriesArray,
    )
);

export const fetchCategoriesFailed = withMatcher(
  (error: Error): FetchCategoriesFailde =>
    createAction(CATEGORIS_ACTION_TYPES.FETCH_CATEGORISE_FAILED, error),
);
