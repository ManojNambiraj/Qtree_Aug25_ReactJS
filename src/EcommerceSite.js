import React from "react";
import "./EcommerceSite.css";
import ProductCard from "./compenents/ProductCard";

function EcommerceSite() {
  return (
    <div className="container-fluid demomain">
      <div className="row">
        <div className="left col-10">
          <div className="row m-4 d-flex g-2">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
        <div className="right col-2">right</div>
      </div>
    </div>
  );
}

export default EcommerceSite;
