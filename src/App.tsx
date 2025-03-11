import React from "react";
import "./styles/App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Partners from "./sections/Partners";
import Auctions from "./sections/Auctions";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Partners />
                <Auctions />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
