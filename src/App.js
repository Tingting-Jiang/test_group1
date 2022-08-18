import React from "react";
import './App.css';
import HomePage from "./components";
import "./vendors/bootstrap/css/bootstrap.min.css";
// import "./vendors/bootstrap/bootstrap.min.css";
import "./vendors/fontawesome/css/all.min.css";

function App() {
  return (
    <div className="container-xxl ps-20 pe-20 bg-light text-dark mt-50 ">
      <HomePage/>
    </div>
  );
}

export default App;
