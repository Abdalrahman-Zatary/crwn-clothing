import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { slectCategories } from '../../store/categories/category.selectors';

import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {

  const categoriesMap = useSelector(slectCategories);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
