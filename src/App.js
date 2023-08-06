import "./App.css";
import Home from "./components/Screen/Home";
import Nav from "./components/Nav";
import Carts from "./components/Screen/Carts";
import Checkout from "./components/Screen/Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppState from "./components/context/AppState";
import Shipment from "./components/Screen/shipment";

function App() {
  return (
    <AppState>
      <Router>
        
        <Routes>
          <Route path="/" element={[<Nav/>,<Home />]}></Route>
          <Route path="/carts" element={<Carts />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/shipment" element={<Shipment />}></Route>
        </Routes>
      </Router>
    </AppState>
  );
}

export default App;
