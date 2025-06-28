import React, { useState } from 'react'
import './Home.css'
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/foodDisplay/foodDisplay";

// Map UI button/category names to data keys
const categoryMap = {
  All: "All",
  Salad: "salad",
  Rolls: "Rolls",
  Deserts: "Deserts",
  Sandwich: "Sandwiches",
  Cake: "Cakes",
  Appetizers: "Appetizers",
  Pasta: "Pasta",
  Noodles: "Noodles"
};

function Home() {
  const [category, setCategory] = useState("All");

  // Handler to map UI name to data category
  const handleCategory = (uiCategory) => {
    setCategory(categoryMap[uiCategory]);
  };

  return (
    <div>
      <Header />
      <button onClick={() => handleCategory("All")}>All</button>
      <button onClick={() => handleCategory("Salad")}>Salad</button>
      <button onClick={() => handleCategory("Rolls")}>Rolls</button>
      <button onClick={() => handleCategory("Deserts")}>Deserts</button>
      <button onClick={() => handleCategory("Sandwich")}>Sandwich</button>
      <button onClick={() => handleCategory("Cake")}>Cake</button>
      <ExploreMenu selectedCategory={category} onCategorySelect={handleCategory} />
      <FoodDisplay category={category} />
    </div>
  )
}

export default Home