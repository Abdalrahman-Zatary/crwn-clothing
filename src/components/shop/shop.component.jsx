import SHOP_DATE from '../../shop-data.json';

const Shop = () => {

  return (
    <div>
      {SHOP_DATE.map(({id, name}) => (
        <div key={id}>
          <h1>{name}</h1>
        </div>
      ))};
    </div>
  );
};

export default Shop;