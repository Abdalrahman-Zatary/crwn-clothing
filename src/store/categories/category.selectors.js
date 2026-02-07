import { createSelector } from 'reselect';

const selectCategoriesReduser = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoriesReduser],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => 
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
); 

export const selectCategoriesIsLoading = createSelector(
  [selectCategoriesReduser],
  (categoriesSlice) => categoriesSlice.isLoading
)