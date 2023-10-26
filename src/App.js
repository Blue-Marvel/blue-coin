import React, { Component } from "react";
import NavBar from "./components/navbar";
import Hero from "./components/hero";
import Analytics from "./components/analytics";
import Newsletter from "./components/newsletter";
import Cards from "./components/cards";
import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Hero />
       <Analytics />
       <Newsletter/>
       <Cards/>
       <Footer/>
      </div>
    );
  }
}

export default App;
