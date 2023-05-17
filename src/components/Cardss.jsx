import React from "react";
import "./cardss.css";
import { useNavigate } from "react-router-dom";

const Cardss = () => {
  const navigate = useNavigate();

  const handleSearchL = () => {
    navigate("/FormDetails");
  };
  return (
    <div class="cardcontainer" onClick={handleSearchL}>
      <div class="card">
        <div class="wrapper">
          <img src="images/aero-1.jpg" class="cover-image" />
        </div>
        <h3 class="title">Book now</h3>
        <img src="images/aero-2.png" class="character" />
      </div>
      <div class="card">
        <div class="wrapper">
          <img src="images/hotel1.jpg" class="cover-image" />
        </div>
        <h3 class="title">Book now</h3>
        <img src="images/hotel2.jpg" class="character" />
      </div>
    </div>
  );
};
export default Cardss;
