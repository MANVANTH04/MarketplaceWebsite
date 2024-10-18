import React from 'react';
import CategoryCard from './CategoryCard';

const CategorySection = () => {
  return (
    <div className="categorysectionmain">
      <h1>Discover Your Next Find</h1>
      <div className="category-grid">
        <CategoryCard
          name="Cycle"
          imagee="https://m.media-amazon.com/images/I/715wCxNPK4L._AC_UF894,1000_QL80_.jpg"
        />
        <CategoryCard
          name="Books"
          imagee="https://m.media-amazon.com/images/I/715wCxNPK4L._AC_UF894,1000_QL80_.jpg"
        />
        <CategoryCard
          name="Gym tools"
          imagee="https://m.media-amazon.com/images/I/715wCxNPK4L._AC_UF894,1000_QL80_.jpg"
        />
        <CategoryCard
          name="Stationary"
          imagee="https://m.media-amazon.com/images/I/715wCxNPK4L._AC_UF894,1000_QL80_.jpg"
        />
        <CategoryCard
          name="Clothes"
          imagee="https://m.media-amazon.com/images/I/715wCxNPK4L._AC_UF894,1000_QL80_.jpg"
        />
        <CategoryCard
          name="Accessories"
          imagee="https://m.media-amazon.com/images/I/715wCxNPK4L._AC_UF894,1000_QL80_.jpg"
        />
      </div>
    </div>
  );
};

export default CategorySection;
