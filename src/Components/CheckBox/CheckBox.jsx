import React from "react";
import "./CheckBox.css";

export default function CheckBox({
  handleCheckboxChange,
  handleSubmit,
  selectedCheckboxes,
}) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset className="container">
          <legend>Budget</legend>
          <div className="selection">
            <input
              className="selection__checkbox"
              type="checkbox"
              id="low"
              name="budget"
              onChange={handleCheckboxChange}
              checked={selectedCheckboxes["low"] || false}
            />
            <label
              className={`selection__label ${
                selectedCheckboxes["low"] ? "selected" : ""
              }`}
              htmlFor="low"
            >
              Low-Cost
            </label>
          </div>
          <div className="selection">
            <input
              className="selection__checkbox"
              type="checkbox"
              id="mid"
              name="budget"
              onChange={handleCheckboxChange}
              checked={selectedCheckboxes["mid"] || false}
            />
            <label
              className={`selection__label ${
                selectedCheckboxes["mid"] ? "selected" : ""
              }`}
              htmlFor="mid"
            >
              Mid-Cost
            </label>
          </div>
          <div className="selection">
            <input
              className="selection__checkbox"
              type="checkbox"
              id="high"
              name="budget"
              onChange={handleCheckboxChange}
              checked={selectedCheckboxes["high"] || false}
            />
            <label
              className={`selection__label ${
                selectedCheckboxes["high"] ? "selected" : ""
              }`}
              htmlFor="high"
            >
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
              id="indoor"
              name="location"
              onChange={handleCheckboxChange}
              checked={selectedCheckboxes["indoor"] || false}
            />
            <label
              className={`selection__label ${
                selectedCheckboxes["indoor"] ? "selected" : ""
              }`}
              htmlFor="indoor"
            >
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
              checked={selectedCheckboxes["outdoor"] || false}
            />
            <label
              className={`selection__label ${
                selectedCheckboxes["outdoor"] ? "selected" : ""
              }`}
              htmlFor="outdoor"
            >
              Outdoor
            </label>
          </div>
        </fieldset>

        <fieldset className="container">
          <legend>Food</legend>
          <div className="selection">
            <input
              className="selection__checkbox"
              type="checkbox"
              id="food"
              name="food"
              onChange={handleCheckboxChange}
              checked={selectedCheckboxes["food"] || false}
            />
            <label
              className={`selection__label ${
                selectedCheckboxes["food"] ? "selected" : ""
              }`}
              htmlFor="food"
            >
              Food
            </label>
          </div>
        </fieldset>

        <fieldset className="container">
          <legend>Drinks</legend>
          <div className="selection">
            <input
              className="selection__checkbox"
              type="checkbox"
              id="drinks"
              name="drinks"
              onChange={handleCheckboxChange}
              checked={selectedCheckboxes["drinks"] || false}
            />
            <label
              className={`selection__label ${
                selectedCheckboxes["drinks"] ? "selected" : ""
              }`}
              htmlFor="drinks"
            >
              Drinks
            </label>
          </div>
        </fieldset>

        <button type="submit" className="section__submit-btn">
          Submit
        </button>
      </form>
    </>
  );
}
