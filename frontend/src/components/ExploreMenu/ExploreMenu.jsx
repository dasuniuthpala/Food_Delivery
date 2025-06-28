import React from 'react';
import './ExploreMenu.css';
import { assets } from '../../assets/assets';

const categories = [
  { name: 'Salad', img: assets.menu_1 },
  { name: 'Rolls', img: assets.menu_2 },
  { name: 'Deserts', img: assets.menu_3 },
  { name: 'Sandwich', img: assets.menu_4 },
  { name: 'Cake', img: assets.menu_5 },
  { name: 'Appetizers', img: assets.menu_6 },
  { name: 'Pasta', img: assets.menu_7 },
  { name: 'Noodles', img: assets.menu_8 },
];

// Map UI names to data categories
const categoryMap = {
  Salad: 'salad',
  Rolls: 'Rolls',
  Deserts: 'Deserts',
  Sandwich: 'Sandwiches',
  Cake: 'Cakes',
  Appetizers: 'Appetizers',
  Pasta: 'Pasta',
  Noodles: 'Noodles',
};

const ExploreMenu = ({ selectedCategory, onCategorySelect }) => {
  return (
    <section className="explore-menu-section">
      <div className="explore-menu-header">
        <h2>Explore our menu</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
        </p>
      </div>
      <div className="explore-menu-list">
        {categories.map((cat) => (
          <div
            className={`explore-menu-item${selectedCategory === categoryMap[cat.name] ? ' active' : ''}`}
            key={cat.name}
            onClick={() => onCategorySelect(cat.name)}
            style={{ cursor: 'pointer' }}
          >
            <div className="explore-menu-img-wrapper">
              <img src={cat.img} alt={cat.name} />
            </div>
            <span>{cat.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreMenu;