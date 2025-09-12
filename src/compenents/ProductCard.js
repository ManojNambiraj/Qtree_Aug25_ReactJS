import React from "react";
import img1 from "../assets/images/redmi.jpg";

function ProductCard(props) {
  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <img src={props.product.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.product.name}</h5>
        <p className="card-text">{props.product.price}</p>
        <p className="card-text">{props.product.desc}</p>
        <p>{props.product.isStock ? "-in stock" : "-out of stock"}</p>
        <button
          className="btn btn-primary"
          disabled={!props.product.isStock}
          onClick={() => {props.handleAddToCart(props.product);}}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
