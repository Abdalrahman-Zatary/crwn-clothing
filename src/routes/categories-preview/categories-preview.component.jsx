import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { slectCategoriesMap } from '../../store/categories/category.selectors';

import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {

  const categoriesMap = useSelector(slectCategoriesMap);

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
