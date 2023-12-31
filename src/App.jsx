import "./App.css";
import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
