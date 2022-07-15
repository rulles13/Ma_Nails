import React from "react";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Galery from "../components/Galery";
import Header from "../components/Header";
import Presentation from "../components/Presentation";
import Tarif from "../components/Tarif";

const Home = () => {
  return (
    <div>
      <Header />
      <Presentation />
      <Galery />
      <Tarif />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;