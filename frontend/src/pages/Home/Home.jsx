import React, { useState } from 'react'
import './Home.css'
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/foodDisplay/foodDisplay";
import AppDownloard from "../../components/AppDownloard/AppDownloard";

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
    <div id="home">
      <Header />
      <section id="explore-menu-section">
        <ExploreMenu selectedCategory={category} onCategorySelect={handleCategory} />
      </section>
      <FoodDisplay category={category} />
      <section id="app-download">
        <AppDownloard />
      </section>
      {/* Make sure your Footer component has id="footer" */}
    </div>
  )
}

export default Home;