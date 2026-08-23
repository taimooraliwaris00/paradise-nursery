import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import PlantThumb from './components/PlantThumb';
import { categories } from './data/plants';
import { addItem, selectCartItems } from './redux/CartSlice';
import './ProductList.css';

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const [justAdded, setJustAdded] = useState({});

  const isInCart = (id) => cartItems.some((item) => item.id === id);

  const handleAddToCart = (plant) => {
    dispatch(
      addItem({
        id: plant.id,
        name: plant.name,
        price: plant.price,
        leafType: plant.leafType,
        leafColor: plant.leafColor,
        potColor: plant.potColor,
        variant: plant.variant,
      })
    );
    setJustAdded((prev) => ({ ...prev, [plant.id]: true }));
  };

  return (
    <div className="product-list-page">
      <Navbar />

      <header className="product-list__intro">
        <p className="product-list__eyebrow">The Catalog</p>
        <h1>Shop by Category</h1>
        <p className="product-list__subtitle">Hand-grown plants, organized by what they do for your space.</p>
      </header>

      {categories.map((category) => (
        <section className="product-category" key={category.id} aria-labelledby={`${category.id}-heading`}>
          <div className="product-category__header">
            <h2 id={`${category.id}-heading`}>{category.name}</h2>
            <p>{category.blurb}</p>
          </div>

          <div className="product-grid">
            {category.plants.map((plant) => {
              const added = isInCart(plant.id) || justAdded[plant.id];
              return (
                <article className="product-card" key={plant.id}>
                  <div className="product-card__thumb">
                    <PlantThumb
                      leafType={plant.leafType}
                      leafColor={plant.leafColor}
                      potColor={plant.potColor}
                      variant={plant.variant}
                    />
                  </div>
                  <h3 className="product-card__name">{plant.name}</h3>
                  <p className="product-card__description">{plant.description}</p>
                  <div className="product-card__footer">
                    <span className="product-card__price">${plant.price.toFixed(2)}</span>
                    <button
                      type="button"
                      className="product-card__btn"
                      disabled={added}
                      onClick={() => handleAddToCart(plant)}
                    >
                      {added ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
