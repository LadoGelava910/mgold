import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ProductItem from "../products/productItem/ProductItem";

function DetailProduct({ products, index }) {
  const params = useParams();

  const [detailProduct, setDetailProduct] = useState([]);

  useEffect(() => {
    console.log(params.id);
    if (params.id) {
      // products.forEach((product) => {
      //   if (index === params.id) setDetailProduct(product);
      // });
      for (let i = 1; i <= products.length; i++) {
        if (i === params.id) setDetailProduct(products[i]);
      }
    }
  }, [params.id, products]);

  if (detailProduct.length === 0) return null;

  return (
    <>
      <div className="product_card" style={{ flexDirection: "column" }}>
        {/* {isAdmin && (
          <input
            type="checkbox"
            checked={detailProduct.checked}
            onChange={() => handleCheck(product._id)}
          />
        )} */}
        <div className="images_container">
          {" "}
          {detailProduct.images.map((item) => {
            return (
              <img src={item} alt="" style={{ width: "30%", height: "auto" }} />
            );
          })}
        </div>

        <div className="product_box">
          <h2 title={detailProduct.title}>
            <strong>{detailProduct.title}</strong>
          </h2>
          {detailProduct._id === "620242f25a5ede0d38214f11" ? (
            <p className="product_price">${detailProduct.price}</p>
          ) : (
            <p className="product_price">{detailProduct.price}₾</p>
          )}

          <div className="product_info">
            <h6 className="product_parameters">
              <strong>სინჯი: {detailProduct.prob}</strong>
            </h6>
            <h6 className="product_parameters">
              <strong>წონა: {detailProduct.weight} გრამი</strong>
            </h6>
          </div>
          <div className="product_about">
            <p>{detailProduct.description}</p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "100px" }}>
        <h2>მსგავსი განცხადებები</h2>
        <div className="products">
          {products.map((product) => {
            return product.category === detailProduct.category ? (
              <ProductItem key={product._id} product={product} />
            ) : null;
          })}
        </div>
      </div>
    </>
  );
}

export default DetailProduct;
