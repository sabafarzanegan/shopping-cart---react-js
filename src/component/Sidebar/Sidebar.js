import React, { useContext } from "react";
import { BiLogoShopify } from "react-icons/bi";
import "./Sidebar.css";
import ProductsContext from "../contectapi/ProductContext";
import { RiCloseFill } from "react-icons/ri";
import { HiOutlineTrash } from "react-icons/hi2";

function Sidebar() {
  const ContextData = useContext(ProductsContext);

  const closehandler = () => {
    ContextData.setisShow(false);
  };
  const DeletHandler = (PRODUCT) => {
    let NewCart = ContextData.ShoppingCard.filter(
      (item) => item.id !== PRODUCT.id
    );
    ContextData.setShoppingCard(NewCart);
    ContextData.setTotal(ContextData.Total - PRODUCT.price);
  };

  return (
    <div
      className={
        ContextData.isShow ? "sidebar-container show" : "sidebar-container "
      }
    >
      <div className="top-sidebar">
        <div className="top-sudebar-left">
          <p onClick={closehandler}>
            {" "}
            <RiCloseFill className="close-btn" />{" "}
          </p>
        </div>
        <div className="top-sidebar-right">
          <h6>
            دیجی لند
            <BiLogoShopify />
          </h6>
        </div>
      </div>
      <div className="shopping-card-content">
        {ContextData.ShoppingCard.map((product) => (
          <div className="box-card">
            <div className="box-card-top">
              <h6 className="box-title">{product.title}</h6>
              <img className="img-cart" src={product.img} alt="" />
            </div>
            <div className="box-card-bottom">
              <h5 className="cart-price">
                <span className="toman">تومان</span>
                {product.price}
              </h5>
              <span className="cart-category">{product.count}</span>
              <span
                onClick={() => DeletHandler(product)}
                className="trash-icon"
              >
                {<HiOutlineTrash />}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="totle-price">
        <h5 className="total-price-num">
          <span>تومان</span>
          {ContextData.Total}
        </h5>
        <p>قیمت کل</p>
      </div>
    </div>
  );
}

export default Sidebar;
