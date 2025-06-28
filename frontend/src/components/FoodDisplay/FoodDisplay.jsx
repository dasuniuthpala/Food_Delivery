import React from 'react'
import "./FoodDisplay.css"
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext)

  // Filter the food list by category (case-insensitive)
  const filteredList = category === "All"
    ? food_list
    : food_list.filter(item => item.category.toLowerCase() === category.toLowerCase());

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {filteredList.length > 0 ? (
          filteredList.map((item) => (
            <FoodItem
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              category={item.category}
            />
          ))
        ) : (
          <p>No items found in this category.</p>
        )}
      </div>
    </div>
  )
}

export default FoodDisplay