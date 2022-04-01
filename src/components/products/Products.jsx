import React, { useContext, useState, useEffect } from "react";
import ProductItem from "./productItem/ProductItem";
import "./Products.css"

function Products({ products, setProducts }) {
  //   const state = useContext(GlobalState);

  //   const [isAdmin] = state.userAPI.isAdmin;
  //   const [token] = state.token;
  //   const [callback, setCallback] = state.productsAPI.callback;
  //   const [loading, setLoading] = useState(false);
  //   const [isCheck, setIsCheck] = useState(false);

  //   const handleCheck = (id) => {
  //     products.forEach((product) => {
  //       if (product._id === id) product.checked = !product.checked;
  //     });
  //     setProducts([...products]);
  //   };

  //   const deleteProduct = async (id, public_id) => {
  //     try {
  //       setLoading(true);
  //       const destroyImg = axios.post(
  //         "https://goldendpoint.herokuapp.com/api/destroy",
  //         { public_id },
  //         {
  //           headers: { Authorization: token },
  //         }
  //       );
  //       const deleteProduct = axios.delete(
  //         `https://goldendpoint.herokuapp.com/api/products/${id}`,
  //         {
  //           headers: { Authorization: token },
  //         }
  //       );

  //       await destroyImg;
  //       await deleteProduct;
  //       setCallback(!callback);
  //       setLoading(false);
  //     } catch (err) {
  //       alert(err.response.data.msg);
  //     }
  //   };

  //   const checkAll = () => {
  //     products.forEach((product) => {
  //       product.checked = !isCheck;
  //     });
  //     setProducts([...products]);
  //     setIsCheck(!isCheck);
  //   };

  //   const deleteAll = () => {
  //     products.forEach((product) => {
  //       if (product.checked) deleteProduct(product._id, product.images.public_id);
  //     });
  //   };

  //   if (loading)
  //     return (
  //       <div>
  //         <Loading />
  //       </div>
  //     );
  return (
    <>
      {/* <Filters /> */}

      <div className="products">
        {products.length > 0 &&
          products.map((product, index) => {
            console.log(products, "products");
            return (
              <ProductItem
                key={index}
                product={product}
                // isAdmin={isAdmin}
                // deleteProduct={deleteProduct}
                // handleCheck={handleCheck}
                index={index}
              />
            );
          })}
      </div>

      {/* <LoadMore /> */}
      {/* {products.length === 0 && <Loading />} */}
    </>
  );
}

export default Products;
