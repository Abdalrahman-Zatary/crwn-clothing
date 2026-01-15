import './category-item.styles.scss';

const CategoryItem = ({ category }) => {

  const { title, imageUrl } = category;

  return (
    <div className="category">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-content">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;