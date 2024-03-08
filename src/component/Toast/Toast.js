import React, { useContext } from "react";
import "./Toast.css";
import ProductsContext from "../contectapi/ProductContext";

function Toast() {
  const ContextData = useContext(ProductsContext);

  return (
    <>
      <div className="position-fixed bottom-0 me-4 end-0 mb-4">
        <div
          className={`${
            ContextData.isToast ? "" : "toast"
          }  align-items-center text-white bg-primary `}
        >
          <div className="d-flex justify-content-center  align-items-center p-2 gap-2">
            <button
              type="button"
              className="btn-close btn-close-wsite mr-2"
              onClick={() => {
                ContextData.setisToast(false);
              }}
            ></button>
            <div className="toast-body">محصول با موفقیت به سبد اضافه شد</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Toast;
