import React from "react";
import { useState } from "react";
import "./Main.css";
import Card from "../Card/Card";
import CheckBox from "../CheckBox/CheckBox";
import { recommendations } from "../../util/constants";

const Main = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    budget: [],
    location: [],
    food: [],
    drinks: [],
  });

  const [filteredRecommendations, setFilteredRecommendations] = useState([]);
  const [showCards, setShowCards] = useState(false);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState({});

  const handleCheckboxChange = (event) => {
    const { name, id, checked } = event.target;

    setSelectedFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };

      if (checked) {
        updatedFilters[name].push(id);
      } else {
        updatedFilters[name] = updatedFilters[name].filter(
          (item) => item !== id
        );
      }

      // Logic to handle unchecking other options
      if (name === "food" || name === "drinks") {
        updatedFilters.location = [];
      } else if (name === "location") {
        updatedFilters.food = [];
        updatedFilters.drinks = [];
      }

      return updatedFilters;
    });

    setSelectedCheckboxes((prevSelected) => ({
      ...prevSelected,
      [id]: checked,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFilteredRecommendations(filterRecommendations());
    setShowCards(true);
    // Clear all selected options
    setSelectedFilters({
      budget: [],
      location: [],
      food: [],
      drinks: [],
    });
    setSelectedCheckboxes({});
  };

  const filterRecommendations = () => {
    return recommendations.filter((recommendation) => {
      const isBudgetMatch =
        selectedFilters.budget.length === 0 ||
        selectedFilters.budget.includes(recommendation.price);
      const isLocationMatch =
        selectedFilters.location.length === 0 ||
        selectedFilters.location.includes(recommendation.category);
      const isFoodMatch =
        selectedFilters.food.length === 0 ||
        selectedFilters.food.includes(recommendation.category);
      const isDrinksMatch =
        selectedFilters.drinks.length === 0 ||
        selectedFilters.drinks.includes(recommendation.category);
      return isBudgetMatch && isLocationMatch && isFoodMatch && isDrinksMatch;
    });
  };

  return (
    <main>
      <CheckBox
        handleCheckboxChange={handleCheckboxChange}
        handleSubmit={handleSubmit}
        selectedCheckboxes={selectedCheckboxes}
      />
      {showCards && <Card recommendations={filteredRecommendations} />}
    </main>
  );
};

export default Main;
