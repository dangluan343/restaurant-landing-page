import React from "react";
import "./app.css";
import {
  Aboutus,
  Chef,
  Findus,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  Menu,
} from "./containers";
import { Navbar } from "./components";
const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Aboutus />
      <Menu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <Findus />
      <Footer />
    </div>
  );
};

export default App;
