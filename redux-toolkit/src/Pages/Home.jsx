import React from "react";
import Products from "../Components/Products";

const Home = () => {
  return (
    <div>
      <h1>Welcome to redux toolkit store</h1>
      <section>
        <h3>Products List</h3>
        <Products />
      </section>
    </div>
  );
};

export default Home;
