import React from "react";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
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
import HowItWorks from "./sections/HowItWorks";

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
                <HowItWorks/>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
