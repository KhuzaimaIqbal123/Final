import React, { useState } from "react";
import "./Categories.css";
  
const Categories = ({ setSelectedCategory }) => {
    const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    "Entire home", "Cabin", "Apartment", "Dinning Room", "Farms", "Top cities", "Amazing views",
    "Design", "Countryside", "Mansions", "Chef's kitchens", "Bed & Breakfasts", 
    "BeachFront"
  ];

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setSelectedCategory(category); 
  };

  return (
    <div className="categories">
      {categories.map((category, index) => (
        <button
          key={index}
          className={`category-btn ${activeCategory === category ? "active" : ""}`}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
