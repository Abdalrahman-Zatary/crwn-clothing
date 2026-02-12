import { all, call, put, takeLatest } from 'redux-saga/effects';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

import { fetchCategoriesSuccess, fetchCategoriesFailed } from './category.action';

import { CATEGORIS_ACTION_TYPES } from './category.types';

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments, 'categories');
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch(error) {
    yield put(fetchCategoriesFailed(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIS_ACTION_TYPES.FETCH_CATEGORISE_START,
    fetchCategoriesAsync,
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)])
}
