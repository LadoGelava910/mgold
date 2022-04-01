import React from "react";
import { Link } from "react-router-dom";
import "./productItem.css";
function ProductItem({ product, isAdmin, deleteProduct, handleCheck, index }) {
  return (
    <Link style={{ width: "100%" }} to={`/detail/${index + 1}`}>
      <div className="product_card">
        {isAdmin && (
          <input
            type="checkbox"
            checked={product.checked}
            onChange={() => handleCheck(product._id)}
          />
        )}
        <img src={product.images[0]} alt="" />

        <div className="product_box">
          <h2 title={product.title}>
            <strong>{product.title}</strong>
          </h2>
          {index === 1 ? (
            <p className="product_price">${product.price}</p>
          ) : (
            <p className="product_price">{product.price}₾</p>
          )}

          <div className="product_info">
            <h6 className="product_parameters">
              <strong>სინჯი: {product.prob}</strong>
            </h6>
            <h6 className="product_parameters">
              <strong>წონა: {product.weight} გრამი</strong>
            </h6>
          </div>
          <div className="product_about">
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductItem;
