import React from "react";
import "./ProductList.css";

const ProductList = ({ products, AddToCart }) => {
  return (
    <div className="card-container">
      {products.map((product) => (
        <div className="card">
          <img src={product.images[0]} />
          <div className="content">
            <p>{product.title}</p>
            <p>${product.price}</p>
          </div>
          <button className="add" onClick={() => AddToCart(product)}>
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
