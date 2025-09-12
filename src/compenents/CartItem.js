import React from "react";

function CartItem(props) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{props.item.name}</div>
        {props.item.price}
      </div>
      <button
        className="badge text-bg-primary rounded-pill"
        onClick={() => {
          props.handleRemoveFromCart(props.item);
        }}
      >
        x
      </button>
    </li>
  );
}

export default CartItem;
