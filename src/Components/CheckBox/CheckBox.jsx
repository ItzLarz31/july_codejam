import React from "react";
import "./CheckBox.css";
import { handleCheckboxChange, handleSubmit } from "./checkBoxFunction"; 
import { filterRecommendations } from '../../util/constants';

export default function CheckBox() {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset className="container">
          <legend>Budget</legend>

          <div className="selection">
            <input
              className="selection__checkbox"
              type="checkbox"
              id="low-cost"
              name="budget"
              onChange={handleCheckboxChange}
            />
            <label className="selection__label" htmlFor="low-cost">
              Low-Cost
            </label>
          </div>
          <div className="selection">
            <input
              className="selection__checkbox"
              type="checkbox"
              id="mid-cost"
              name="budget"
              onChange={handleCheckboxChange}
            />
            <label className="selection__label" htmlFor="mid-cost">
              Mid-Cost
            </label>
          </div>
          <div className="selection">
            <input
              className="selection__checkbox"
              type="checkbox"
              id="high-cost"
              name="budget"
              onChange={handleCheckboxChange}
            />
            <label className="selection__label" htmlFor="high-cost">
              High-Cost
            </label>
          </div>
        </fieldset>
        
        {/* Location Selection */}
        <fieldset className="container">
          <legend>Location</legend>
          <div className="selection">
            <input
              className="selection__checkbox"
              type="checkbox"
              id="indoor"
              name="location"
              onChange={handleCheckboxChange}
            />
            <label className="selection__label" htmlFor="indoor">
              Indoor
            </label>
          </div>
          <div className="selection">
            <input
              className="selection__checkbox"
              type="checkbox"
              id="outdoor"
              name="location"
              onChange={handleCheckboxChange}
            />
            <label className="selection__label" htmlFor="outdoor">
              Outdoor
            </label>
          </div>
        </fieldset>
        
        {/* Other Selection */}
        <fieldset className="container">
          <legend>Other</legend>
          <div className="selection">
            <input
              className="selection__checkbox"
              type="checkbox"
              id="food"
              name="other"
              onChange={handleCheckboxChange}
            />
            <label className="selection__label" htmlFor="food">
              Food
            </label>
          </div>
          <div className="selection">
            <input
              className="selection__checkbox"
              type="checkbox"
              id="other-outdoor"
              name="other"
              onChange={handleCheckboxChange}
            />
            <label className="selection__label" htmlFor="other-outdoor">
              Other Outdoor
            </label>
          </div>
        </fieldset>
        
        {/* Submit Button */}
        <button type="submit" className="section__submit-btn">
          Submit
        </button>
      </form>
    </>
  );
}
