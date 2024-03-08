import React, { useContext } from "react";
import "./Product.css";
import { IoIosArrowRoundBack } from "react-icons/io";
import ProductsContext from "../contectapi/ProductContext";

function Product() {
  const ContextData = useContext(ProductsContext);

  const addToCardhandler = (PRODUCT) => {
    // console.log(PRODUCT)
    ContextData.setisToast(true);
    setTimeout(() => {
      ContextData.setisToast(false);
    }, 5000);
    let isInCart = ContextData.ShoppingCard.some(
      (item) => item.title === PRODUCT.title
    );
    console.log(isInCart);
    if (!isInCart) {
      let NewProductToCart = {
        id: ContextData.ShoppingCard.length + 1,
        title: PRODUCT.title,
        img: PRODUCT.img,
        price: PRODUCT.price,
        category: PRODUCT.category,
        count: 1,
      };
      ContextData.setShoppingCard((prevProducts) => [
        ...prevProducts,
        NewProductToCart,
      ]);
    } else {
      let userCart = [...ContextData.ShoppingCard];
      let newUserCart = userCart.map((bagProduct) => {
        if (bagProduct.title === PRODUCT.title) {
          bagProduct.count += 1;
        }
        return bagProduct;
      });

      ContextData.setShoppingCard(newUserCart);
    }
    ContextData.setTotal(ContextData.Total + PRODUCT.price);
  };
  return (
    <>
      {ContextData.allData.map((product) => {
        return (
          <div className="product-container">
            <img src={product.img} alt="" />
            <div className="product-body">
              <h5 className="product-title">{product.title}</h5>
              <div className="footer">
                <span className="price">
                  <span>تومان</span>
                  {product.price}
                </span>
                <span className="category">{product.category}</span>
              </div>
              <div className="d-flex align-items-center justify-content-between mt-4">
                <button
                  className="add-to-cart"
                  onClick={() => addToCardhandler(product)}
                >
                  افزودن به سبد خرید
                </button>
                <a className="more-read">
                  <IoIosArrowRoundBack className="arrow" />
                  مشاهده بیشتر
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Product;
