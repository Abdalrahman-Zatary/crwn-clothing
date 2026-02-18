import { createSelector } from 'reselect';

import { CategoriesState } from './category.reducer';
import { CategoryMap } from './category.types';

const selectCategoriesReduser = (state): CategoriesState => state.categories;

export const selectCategories = createSelector(
  [selectCategoriesReduser],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => 
    categories.reduce((acc, category): CategoryMap => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap)
); 

export const selectCategoriesIsLoading = createSelector(
  [selectCategoriesReduser],
  (categoriesSlice) => categoriesSlice.isLoading
)