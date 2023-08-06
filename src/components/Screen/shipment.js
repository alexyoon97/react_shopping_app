import React, { useContext, useEffect } from "react";
import "./shipment.css";
import AppContext from "../context/app-context";
import { Link } from "react-router-dom";

const Shipment = () => {
  const { cart, setCart, user, setUser } = useContext(AppContext);
  const resetFunc = () => {
    setCart([]);
    setUser({
      email: "",
      phone: "",
      Fname: "",
      Lname: "",
      address: "",
      city: "",
      country: "",
      province: "",
    });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="checkout_container">
      <div className="confirmation_text">
        <h3>Congratulation, Your Order Completed!</h3>
        <h5>
          Your order succesfully sent to our system, thank you for using our
          service and we will send you the shipment as soon as posibble.
        </h5>
      </div>
      <h2 style={{ textAlign: "center", padding: "3vh" }}>Order Detail</h2>
      <div className="order_info">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            fontSize: "2vh",
            paddingBottom: "5vh",
          }}
        >
          <div className="order_user">
            Name: {user.Fname} {user.Lname}
            <br></br>
            Email: {user.email}
            <br></br>
            Phone: {user.phone}
            <br></br>
            Address: {user.address}, {user.city} {user.province}, {user.country}
          </div>
          <div className="order_cart">
            {cart.map((item) => {
              return (
                <div>
                  {item.quantity} x {item.title}
                </div>
              );
            })}
          </div>
        </div>
        <Link
          onClick={() => resetFunc()}
          to="/"
          className="submit"
          style={{
            margin: "auto",
            marginTop: "6vh",
            width: "22%",
            fontSize: "2vh",
          }}
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default Shipment;
