import React, { useContext,useEffect } from "react";
import "../Screen/Checkout.css";
import ProgressBar from "./Carts_component/Progress_bar";
import AppContext from "../context/app-context";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cart, setCart, user, setUser } = useContext(AppContext);
  let subtotal = 0;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="checkout_container">
      <ProgressBar />
      <div className="cart_items">
        <div className="cart_info">
          {cart.map((item) => {
            return (
              <div className="cart-item_cards">
                <span>
                  <span
                    style={{
                      position: "absolute",
                      backgroundColor: " rgba(172, 172, 172, 0.658)",
                      fontSize: "1.7vh",
                      padding: "1vh",
                      borderRadius: "10px",
                    }}
                  >
                    {item.quantity}
                  </span>
                  <img
                    alt="item_img"
                    src={item.image.src}
                    style={{ height: "15vh" }}
                  ></img>
                </span>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: "2vh",
                      marginRight: "2vh",
                      color: "green",
                      fontWeight: "bold",
                    }}
                  >
                    {item.title}
                  </span>
                  <span>${item.variants[0].price}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="subtotal">
          Subtotal:{" "}$
          {
            (cart.forEach(
              (item) =>
                (subtotal += parseFloat(item.quantity * item.variants[0].price))
            ),
            subtotal.toFixed(2))
          }
        </div>
      </div>
      <div className="user_info">
        <h3>Contact Info</h3>
        <div
          className="user_contact"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <input
            className="browser-default"
            type="text"
            placeholder="Email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          ></input>
          <input
            className="browser-default"
            type="text"
            placeholder="Phone"
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
          ></input>
        </div>
        <div className="user_shipping_address">
          <h3>Shipping address</h3>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <input
              className="browser-default"
              type="text"
              placeholder="First Name"
              onChange={(e) => setUser({ ...user, Fname: e.target.value })}
            ></input>
            <input
              className="browser-default"
              type="text"
              placeholder="Last Name"
              onChange={(e) => setUser({ ...user, Lname: e.target.value })}
            ></input>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <input
              className="browser-default"
              type="text"
              placeholder="Address"
              onChange={(e) => setUser({ ...user, address: e.target.value })}
            ></input>
            <input
              className="browser-default"
              type="text"
              placeholder="Apartment"
            ></input>
            <input
              className="browser-default"
              type="text"
              placeholder="City"
              onChange={(e) => setUser({ ...user, city: e.target.value })}
            ></input>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <input
              className="browser-default"
              type="text"
              placeholder="Country"
              onChange={(e) => setUser({ ...user, country: e.target.value })}
            ></input>
            <input
              className="browser-default"
              type="text"
              placeholder="Province"
              onChange={(e) => setUser({ ...user, province: e.target.value })}
            ></input>
          </div>
        </div>
        <Link className="submit" to="/shipment">
          Continue to Shipping
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
