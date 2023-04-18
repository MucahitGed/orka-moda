import React from "react";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import '../css/hover.css'
import Products from "../components/Products";
import Slider from "../components/Slider";
import { DocumentTitle } from "../components/DocumentTitle";

const Home = () => {

  DocumentTitle('OЯKA MODA')
  return (
    <div>
      <Navbar />
      <Slider />
      <Categories />
      <Products/>
      <Footer/>
    </div>
  );
};

export default Home;
