import React, { useState } from "react";
// import "./EcommerceSite.css";
import ProductCard from "./compenents/ProductCard";
import img1 from "./assets/images/redmi.jpg";
import img2 from "./assets/images/img2.jpg";
import img3 from "./assets/images/img2.webp";
import CartItem from "./compenents/CartItem";

function EcommerceSite() {
  const datas = [
    {
      id: 1,
      name: "Apple",
      price: 120000,
      desc: "Some quick example text to build on the card title",
      img: img1,
      isStock: true,
    },
    {
      id: 2,
      name: "Redmi",
      price: 15000,
      desc: "Some quick example text to build on the card title",
      img: img2,
      isStock: false,
    },
    {
      id: 3,
      name: "Sony",
      price: 47000,
      desc: "Some quick example text to build on the card title",
      img: img3,
      isStock: true,
    },
    {
      id: 4,
      name: "IQOO",
      price: 25000,
      desc: "Some quick example text to build on the card title",
      img: img1,
      isStock: false,
    },
    {
      id: 5,
      name: "Xiomi",
      price: 13000,
      desc: "Some quick example text to build on the card title",
      img: img2,
      isStock: true,
    },
  ];

  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0)

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
    setTotal(total + product.price);
  };

  const handleRemoveFromCart = (item) => {
    let temp = cartItems.filter((citem) => citem.id != item.id)
    setCartItems(temp);
    setTotal(total - item.price)
  }

  return (
    <div className="container-fluid demomain">
      <div className="row">
        <div className="left col-10">
          <div className="row m-2 d-flex g-2">
            {datas.map((product) => {
              return (
                <ProductCard
                  product={product}
                  handleAddToCart={handleAddToCart}
                />
              );
            })}
          </div>
        </div>
        <div className="right col-2">
          <ol className="list-group list-group-numbered">
            <h2>Count: {cartItems.length}</h2>
            {cartItems.map((item) => {
              return (
                <CartItem
                  item={item}
                  handleRemoveFromCart={handleRemoveFromCart}
                />
              );
            })}
            <h3>Total: {total}</h3>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default EcommerceSite;
