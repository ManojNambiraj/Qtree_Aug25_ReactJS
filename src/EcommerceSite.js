import React from "react";
import "./EcommerceSite.css";
import ProductCard from "./compenents/ProductCard";
import img1 from "./assets/images/redmi.jpg"
import img2 from "./assets/images/img2.jpg"
import img3 from "./assets/images/img2.webp"

function EcommerceSite() {

  const datas = [
    {
      id: 1,
      name: "Apple",
      price: 120000,
      desc: "Some quick example text to build on the card title",
      img: img1,
    },
    {
      id: 2,
      name: "Redmi",
      price: 15000,
      desc: "Some quick example text to build on the card title",
      img: img2,
    },
    {
      id: 3,
      name: "Sony",
      price: 47000,
      desc: "Some quick example text to build on the card title",
      img: img3,
    },
  ];

  return (
    <div className="container-fluid demomain">
      <div className="row">
        <div className="left col-10">
          <div className="row m-2 d-flex g-2">
            {
              datas.map((product) => {
                return <ProductCard product={product} />;
              })
            }
          </div>
        </div>
        <div className="right col-2">right</div>
      </div>
    </div>
  );
}

export default EcommerceSite;
