import React from "react";
import "./Card.css";

const Card = ({ recommendations }) => {
  return (
    <div className="cards">
      {recommendations.map((recommendation) => (
        <div className="card" key={recommendation.id}>
          <h2 className="card__name">{recommendation.name}</h2>
          <img
            className="card__picture"
            src={recommendation.image}
            alt={recommendation.name}
          />
          <p className="card__description">{recommendation.info}</p>
          <p className="card__price-level">
            <strong>Price:</strong>{" "}
            <span className="card__price-level-label">
              {recommendation.price &&
                recommendation.price.charAt(0).toUpperCase() +
                  recommendation.price.slice(1)}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Card;
