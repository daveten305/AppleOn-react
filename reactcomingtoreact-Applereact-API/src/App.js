import React from "react";

import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

import "./Components/css/bootstrap.css";
import "./Components/css/styles.css";
import "./Components/Footer/Footer";

import AppleNews from "./Components/AppleNews/AppleNews";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <AppleNews />
      <Footer />
    </div>
  );
}

export default App;
