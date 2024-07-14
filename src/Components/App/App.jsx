import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "../../assets/vite.svg";
import "./App.css";
import CheckBox from "../CheckBox/CheckBox";
import Card from "../Card/Card";


function App() {
  return (
    <>
      <CheckBox></CheckBox>
      <Card />
    </>
  );
}

export default App;
