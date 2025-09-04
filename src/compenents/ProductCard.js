import React from 'react'
import img1 from "../assets/images/redmi.jpg"

function ProductCard() {
  return (
    <div className="card mr-2" style={{ width: "18rem" }}>
      <img src={img1} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card’s content.
        </p>
        <button className="btn btn-primary">Add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard
