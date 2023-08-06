import React from "react";

const Progress_bar = () => {
  return (
    <div className="process_steps">
      <i
        className="material-icons btn-floating btn-med"
        style={{ boxShadow: "0 0 10px rgba(45, 80, 51, 0.2)" }}
      >
        add
      </i>
      <i className="material-icons">keyboard_arrow_right</i>
      <i className="material-icons btn-floating btn-med">shopping_cart</i>
      <i className="material-icons">keyboard_arrow_right</i>
      <i className="material-icons btn-floating btn-med">airplanemode_active</i>
    </div>
  );
};

export default Progress_bar;
