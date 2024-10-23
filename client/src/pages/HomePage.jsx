import React from "react";
import Header from "../components/Header";
import Categories from "../components/Categories";
import Discounts from "../components/Discounts";
import DiscountedProducts from "../components/DiscountedProducts";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Categories />
      <Discounts />
      <DiscountedProducts />
    </div>
  );
};

export default HomePage;
