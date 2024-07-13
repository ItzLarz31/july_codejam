import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "../../assets/vite.svg";
import "./Card.css";
import { recommendations } from "../../util/constants";
import Arcade from "../../assets/images/arcade.jpg";
export default function Card() {
  return (
    <>
      <div className="card">
        <img className="card__picture" src={Arcade} />
        <p className="card__description">
          Watermelons are incredibly hydrating, consisting of about 92% water.
        </p>
        <p className="card__price-level">
          <strong>Price:</strong>
          <p className="card__price-level-label">High</p>
        </p>
      </div>
    </>
  );
}
