import React, { useEffect, useState, useRef, useContext } from "react";
import "../Screen/Carts.css";
import ReactHtmlParser from "html-react-parser";
import IntroModal from "./Carts_component/Intro_modal";
import CartHeader from "./Carts_component/Cart_header";
import ProgressBar from "./Carts_component/Progress_bar";
import CartNav from "./Carts_component/Cart_nav";
import { Link } from "react-router-dom";
import AppContext from "../context/app-context";

const Carts = () => {
  const { cart, setCart } = useContext(AppContext);
  const cbRef = useRef([]);
  const [products, setProducts] = useState(null);
  let subtotal = 0;

  const addToCart = (product, e) => {
    if (e.target.checked) {
      let newProduct = { ...product, quantity: 1 };
      setCart([...cart, newProduct]);
    } else {
      product.quantity = 0;
      setCart(cart.filter((item) => item.id !== product.id));
    }
  };

  const modifyQuantity = (value, product) => {
    let newCart = [...cart];
    if (
      newCart.find((item) => product.id === item.id).quantity <= 1 &&
      value === -1
    ) {
      product.quantity = 0;
      setCart(cart.filter((item) => item.id !== product.id));
      cbRef.current.find((cb) => cb.id === product.id).checked =   false;
    } else {
      newCart.find((item) => product.id === item.id).quantity += value;
      setCart(newCart);
    }
  };

  const addToRef = (el) => {
    if (el && !cbRef.current.includes(el)) {
      cbRef.current.push(el);
    }
  };
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("fetching data");

        setProducts(data);
        console.log(data);
      });
  }, [cart]);
  return (
    <div className="main_container">
      <IntroModal />
      <CartHeader />
      <div className="cart_container">
        <ProgressBar />
        <CartNav />
        <div className="item_container " style={{ width: "1300px" }}>
          {products ? (
            products.products.map((product, i) => {
              return (
                <div className="food_card box-shadow5">
                  <img alt="product_img" src={product.image.src}></img>
                  <div className="food_desc">
                    <span
                      style={{
                        fontSize: "2vh",
                        marginRight: "2vh",
                        color: "green",
                        fontWeight: "bold",
                      }}
                    >
                      {product.title}
                    </span>
                    <span style={{ fontSize: "1.6vh" }}>
                      ${product.variants[0].price}
                    </span>
                    <span>{ReactHtmlParser(product.body_html)}</span>
                  </div>
                  <label style={{ margin: "2vh 1vh 0 0" }}>
                    <input
                      ref={addToRef}
                      id={product.id}
                      onClick={(e) => addToCart(product, e)}
                      type="checkbox"
                    />
                    <span></span>
                  </label>
                </div>
              );
            })
          ) : (
            <div></div>
          )}
        </div>
        <div className="item_cart box-shadow5">
          <h5>Your Order</h5>
          <div style={{ overflowY: "scroll", height: "60vh" }}>
            {cart.length !== 0 ? (
              cart.map((item) => {
                return (
                  <div className="item_detail">
                    <span>
                      <img alt="item_img" src={item.image.src}></img>
                    </span>
                    <span
                      style={{
                        maxWidth: "10vh",
                        fontSize: "1.5vh",
                        color: "black",
                        margin: "auto",
                        textAlign: "left",
                      }}
                    >
                      {item.title}
                    </span>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        padding: "1vh",
                      }}
                    >
                      <span>${item.variants[0].price}</span>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          paddingTop: "1vh",
                        }}
                      >
                        <i
                          onClick={() => modifyQuantity(-1, item)}
                          class="material-icons"
                          style={{
                            cursor: "pointer",
                            fontSize: "1.8vh",
                            margin: "auto",
                          }}
                        >
                          remove
                        </i>
                        <span style={{ padding: "0 0.5vh", fontSize: "2vh" }}>
                          {item.quantity}
                        </span>
                        <i
                          onClick={() => modifyQuantity(1, item)}
                          class="material-icons"
                          style={{
                            cursor: "pointer",
                            fontSize: "1.8vh",
                            margin: "auto",
                          }}
                        >
                          add
                        </i>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div></div>
            )}
          </div>
          <h5
            style={{
              backgroundColor: "white",
              paddingTop: "1vh",
              paddingBottom: "2.5vh",
              margin: "0",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              fontSize: "2vh",
            }}
          >
            <div>{cart.length} items</div>
            <div>
              Subtotal: $
              {
                (cart.forEach(
                  (item) =>
                    (subtotal += parseFloat(
                      item.quantity * item.variants[0].price
                    ))
                ),
                subtotal.toFixed(2))
              }
            </div>
          </h5>
          <h6
            className="waves-effect waves-light next_button"
            style={{
              backgroundColor: "rgba(44, 182, 31, 0.931)",
              width: "100%",
              height: "4vh",
              paddingTop: "8px",
              color: "white",
              fontSize: "2vh",
              cursor: "pointer",
              borderRadius: "20px",
              top: "-3vh",
            }}
          >
            <Link to="/checkout">Continue</Link>
          </h6>
        </div>
      </div>
      <i
        style={{
          position: "fixed",
          bottom: "1vh",
          right: "2vh",
          fontSize: "5vh",
          cursor: "pointer",
        }}
        className="material-icons"
      >
        live_help
      </i>
    </div>
  );
};

export default Carts;
