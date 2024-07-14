import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "../../assets/vite.svg";
import { recommendations } from "../../util/constants";
import "./Card.css"; // Ensure to have your Card component styles imported or defined

const Card = () => {
  return (
    <div className="cards">
      {recommendations.map((recommendation) => (
        <div className="card" key={recommendation.id}>
          <img className="card__picture" src={recommendation.image} alt={recommendation.name} />
          <p className="card__description">{recommendation.info}</p>
          <p className="card__price-level">
            <strong>Price:</strong>{" "}
            <span className="card__price-level-label">{recommendation.price}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Card;