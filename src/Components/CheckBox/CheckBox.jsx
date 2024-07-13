import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "../../assets/vite.svg";
import "./CheckBox.css";

export default function CheckBox() {
  return (
    <>
      <form>
        <fieldset className="container">
          <legend>Budget</legend>

          <div className="selection">
            <input
              className="selection__checkbox"
              type="checkbox"
              id="budget"
              name="budget"
            />
            <label className="selection__label" htmlFor="low-cost">
              Low-Cost
            </label>
          </div>
          <div className="selection">
            <input
              className="selection__checkbox"
              type="checkbox"
              id="budget"
              name="budget"
            />
            <label className="selection__label" htmlFor="mid-cost">
              Mid-Cost
            </label>
          </div>
          <div className="selection">
            <input
              className="selection__checkbox"
              type="checkbox"
              id="budget"
              name="budget"
            />
            <label className="selection__label" htmlFor="high-cost">
              High-Cost
            </label>
          </div>
        </fieldset>
        <fieldset className="container">
          <legend>Location</legend>

          <div className="selection">
            <input
              className="selection__checkbox"
              type="checkbox"
              id="location"
              name="location"
            />
            <label className="selection__label" htmlFor="indoor">
              Indoor
            </label>
          </div>
          <div className="selection">
            <input
              className="selection__checkbox"
              type="checkbox"
              id="location"
              name="location"
            />
            <label className="selection__label" htmlFor="outdoor">
              Outdoor
            </label>
          </div>
        </fieldset>
        <fieldset className="container">
          <legend>Other</legend>

          <div className="selection">
            <input
              className="selection__checkbox"
              type="checkbox"
              id="other"
              name="other"
            />
            <label className="selection__label" htmlFor="food">
              Food
            </label>
          </div>
          <div className="selection">
            <input
              className="selection__checkbox"
              type="checkbox"
              id="other"
              name="other"
            />
            <label className="selection__label" htmlFor="outdoor">
              Outdoor
            </label>
          </div>
        </fieldset>
      </form>
      <button className="section__submit-btn">Submit</button>
    </>
  );
}
