import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./container/header/Header";
import LandingPage from "./container/landingPage";

function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage />
    </div>
  );
}

export default App;
