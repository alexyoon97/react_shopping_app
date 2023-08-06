import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home_page">
      <div className="Signup_wizard">
        <h1 style={{ color: "#23ad32" }}>
          Plant-powered food to fuel your life.
        </h1>
        <h5 style={{ margin: "3vh 0" }}>
          Delivered and ready in 5 minutes — no shopping, prep, or cleanup.
        </h5>
        <div className="Deliver_form">
          <div className="Deliver_info">
            <div className="input-field col s6">
              <input id="Zip_code" type="text" className="validate" />
              <label htmlFor="Zip_code">Zip code</label>
            </div>
            <div className="input-field col s6">
              <input id="Email" type="email" className="validate" />
              <label htmlFor="Email">Email</label>
            </div>
            <span
              style={{
                fontSize: "1.2vh",
                fontStyle: "italic",
                color: "#a8a8a8",
              }}
            >
              By continuing, you agree to our Terms of Service and Privacy
              Policy.
            </span>
          </div>
          <button
            style={{
              margin: "auto 0",
              backgroundColor: "#23ad32",
              marginLeft: "10vh",
            }}
            className="btn-floating btn-large waves-effect waves-light"
          >
            <Link to="/carts">
              <i className="material-icons">arrow_forward</i>
            </Link>
          </button>
        </div>
        <i
          style={{
            position: "absolute",
            bottom: "5vh",
            right: "10vh",
            fontSize: "5vh",
            cursor: "pointer",
          }}
          className="material-icons"
        >
          live_help
        </i>
      </div>
    </div>
  );
};

export default Home;
