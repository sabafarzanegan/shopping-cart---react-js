import React, { useContext } from "react";
import "./Navbar.css";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { BiLogoShopify } from "react-icons/bi";
import ProductsContext from "../contectapi/ProductContext";

function Navbar() {
  const ContextData = useContext(ProductsContext);
  const addhandler = () => {
    ContextData.setisShow((prevstate) => !prevstate);
  };
  return (
    <>
      <div className="navbar-container">
        <div className="card-icon">
          <HiOutlineShoppingCart
            className="shopping-card"
            onClick={addhandler}
          />
        </div>
        <div className="logo">
          <BiLogoShopify className="logo-icon" />
          <a>دیجی لند</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
