import React, { useEffect, useState } from "react";
import data from "./data";
import Category from "./component/Category/Category";
import Product from "./component/Product/Product";
import "./App.css";
import ProductsContext from "./component/contectapi/ProductContext";
import Navbar from "./component/Navbar/Navbar";
import Sidebar from "./component/Sidebar/Sidebar";
import Toast from "./component/Toast/Toast";

const allCategories = ["all", ...new Set(data.map((menu) => menu.category))];

function App() {
  const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");
  const PriceFromLocalStorage = JSON.parse(localStorage.getItem("Price") || 0);
  const [allData, setAllData] = useState(data);
  const [categories, setCategories] = useState(allCategories);
  const [isShow, setisShow] = useState(false);
  const [isToast, setisToast] = useState(false);
  const [ShoppingCard, setShoppingCard] = useState(cartFromLocalStorage);

  const [Total, setTotal] = useState(PriceFromLocalStorage);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(ShoppingCard));
    localStorage.setItem("Price", JSON.stringify(Total));
  }, [ShoppingCard, Total]);

  const filterhandler = (category) => {
    if (category === "all") {
      setAllData(data);
      return;
    }

    let filteredData = data.filter((item) => item.category === category);

    setAllData(filteredData);
  };

  return (
    <>
      <ProductsContext.Provider
        value={{
          allData,
          setAllData,
          categories,
          filterhandler,
          setisShow,
          isShow,
          isToast,
          setisToast,
          ShoppingCard,
          setShoppingCard,
          Total,
          setTotal,
        }}
      >
        <div className="app-container">
          <Navbar />
          <h1
            className="app-title"
            style={{
              textAlign: "center",
              marginBottom: "20px",
              marginTop: "15px",
            }}
          >
            فروشگاه
          </h1>

          <Category />
          <div className="product-container-app">
            <Product />
          </div>
          <Sidebar />
          <Toast />
        </div>
      </ProductsContext.Provider>
    </>
  );
}

export default App;
