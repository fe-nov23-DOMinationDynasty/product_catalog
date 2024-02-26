import React from 'react';
import '../../styles/utils/text-styles.scss';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { Category } from '../../enums/Category';
import { useAppSelector } from '../../app/hooks';
import './ShopCategory.scss';
import { animDuration } from '../../styles/utils/AOS';

export const ShopCategory: React.FC = () => {
  const categories = Object.values(Category);
  const { products } = useAppSelector((state) => state.productsReducer);

  return (
    <section className="categories" id="categories" >
      <h2 className="categories__title h2">Shop by category</h2>
      <div className="categories__list">
        {categories.map((category) => (
          <Link
            className="category"
            to={`catalog/${category}`}
            key={category}
            data-aos="zoom-out"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration={animDuration}
          >
            <div className="category__photo-container">
              <span
                className={`category__photo category__photo--${category}`}
              />
            </div>

            <h4 className="category__title h4">
              {category === Category.Phones ? 'Mobile Phones' : category}
            </h4>
            <span className="category__counter">
              {`${products.filter((product) => product.category === category).length} models`}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};
