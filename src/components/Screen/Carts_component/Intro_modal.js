import React, { useEffect,useState } from "react";

const Intro_modal = () => {
  const [show, setShow] = useState(true);

  const toggleShow = () => {
    setShow((show) => !show);
    document.body.style.overflowY = "scroll";
  };
  useEffect(()=>{
    if (show) {
        document.body.style.overflowY = "hidden";
      }
  },[])
  return (
    <div>
      {show ? (
        <div>
          <div className="modal_bg"></div>
          <div className="intro_modal">
            <h1 style={{ color: "rgba(44, 182, 31, 0.931)" }}>
              Let's get started!
            </h1>
            <h4
              style={{ color: "rgba(128, 128, 128, 0.931)", fontSize: "2.5vh" }}
            >
              Here are a few steps to get your box delivered
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                width: "80%",
                margin: "auto",
                fontSize: "2.5vh",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <i class="material-icons large">add_shopping_cart</i>
                <span>Add to your cart</span>
                <h6
                  style={{
                    color: "rgba(128, 128, 128, 0.8)",
                    maxWidth: "250px",
                  }}
                >
                  Add any items that you like and set up quantity
                </h6>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <i class="material-icons large">airplanemode_active</i>
                <span>Get Delivered!</span>
                <h6
                  style={{
                    color: "rgba(128, 128, 128, 0.8)",
                    maxWidth: "250px",
                  }}
                >
                  Be prepared to receive your Helathy Box!
                </h6>
              </div>
            </div>
            <button
              onClick={() => toggleShow()}
              class="waves-effect waves-light btn"
            >
              Got it!
            </button>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Intro_modal;
