import React, { useEffect, useState } from "react";
import DetailProduct from "./components/detailProduct/DetailProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/products/Products";
import Categories from "./components/categories/Categories";
function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts([
      {
        title: "ოქროს საყურეები",
        sold: false,
        description: "",
        number: "+995 597 733 199",
        prob: 750,
        weight: 15,
        price: 3000,
        category: "",
        images: [
          "https://res.cloudinary.com/dzxxb95vy/image/upload/v1648811139/6_mlyzdk.jpg",
        ],
      },
      {
        title: "ზურმუხტის სამაჯური ბრილიანტებით",
        sold: false,
        description: "6 კტ (კარატი) ბრილიანტი",
        number: "+995 597 733 199",
        prob: 750,
        weight: 70,
        price: 10000,
        category: "",
        images: [
          "https://res.cloudinary.com/dzxxb95vy/image/upload/v1648811139/5_mdesan.jpg",
          "https://res.cloudinary.com/dzxxb95vy/image/upload/v1648811139/3_dvvckc.jpg",
        ],
      },
      {
        title: "გრაციელას ბრენდის ოქროს სამაჯური სამ ფერში",
        sold: false,
        description: "",
        number: "+995 597 733 199",
        prob: 750,
        weight: 13.52,
        price: 2600,
        category: "",
        images: [
          "https://res.cloudinary.com/dzxxb95vy/image/upload/v1648811139/2_bdv5fi.jpg",
        ],
      },
    ]);
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Products products={products} setProducts={setProducts} />}
          />
          <Route
            path="/detail/:id"
            element={<DetailProduct products={products} />}
          />
          <Route path="/category" element={Categories} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
