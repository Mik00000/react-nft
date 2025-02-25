import React from "react";
import "./styles/App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./sections/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes></Routes>
      </div>
    </Router>
  );
}

export default App;
