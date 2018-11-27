import React, { Component } from "react";
import "./App.css";
// import Login from "./components/Login";
import Container from "./components/Container";
import { Header, Footer } from "./components/layouts";

// if (true) require("../assets/css/custom.css");

import i18nService from "./service/i18n";
const locale = "ar-DZ";
const i18n = new i18nService(locale);

class App extends Component {
  render() {
    return (
      <div className="window">
        <Header />
        <div className="window-content">
          <Container i18n={i18n} locale={locale} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
