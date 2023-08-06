import React from "react";
import { Link } from "react-router-dom";
import Fresh_meal_icon from "../../../images/fresh_meal_img.png";

const Cart_header = () => {
  return (
    <div className="cart_header">
      <Link to="/">
        <img
          style={{ width: "auto", height: "60px", margin: "3.5vh" }}
          src={Fresh_meal_icon}
          alt="Company icon"
        />
      </Link>
    </div>
  );
};

export default Cart_header;
