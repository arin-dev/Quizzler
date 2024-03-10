import React, { useState, useEffect } from "react";
import categories from "../categories";
// import { category, setCategory } from "../App.js";

export default function CategorySelector({ category, setCategory }) {
  return (
    <div className="category-selector">
      <p>Select Category</p>
      <select
        value={category}
        onChange={(e) => {
          // console.log(e.target);
          setCategory(e.target.value);
        }}
      >
        {categories.map((category, index) => (
          <option key={index} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}
