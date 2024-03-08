import React, { useContext, useState } from "react";
import "./Category.css";
import ProductsContext from "../contectapi/ProductContext";

function Category() {
  const ContextData = useContext(ProductsContext);
  const [isActive, setisActive] = useState("all");

  return (
    <>
      <div className="btn-container">
        {ContextData.categories.map((item, index) => (
          <button
            onClick={() => {
              ContextData.filterhandler(item);
              setisActive(item);
            }}
            key={index}
            className={
              item === isActive ? "btn-category active" : "btn-category"
            }
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
}

export default Category;
