import React from "react";
import { NavLink } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Product = ({ items, cart, setCart }) => {
  const addToCart = (id, price, title, description, imgSrc) => {
    const obj = {
      id,
      price,
      title,
      description,
      imgSrc,
    };
    setCart([...cart, obj]);
    console.log("Cart elemenet=", cart);
    toast.success("item added in the Cart!");
  };
   
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

      <div className="container my-5">
        <div className="row">
          {items.map((product) => {
            return (
              <>
                <div
                  key={product.id}
                  className="col-lg-4 col-md-6 my-3 text-center"
                >
                  <div className="card" style={{ width: "18rem" }}>
                    <NavLink
                      to={`/product/${product.id}`}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={product.imgSrc}
                        className="card-img-top"
                        alt="..."
                      />
                    </NavLink>
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.description} </p>
                      <button className="btn btn-primary mx-3">
                        ₹ {product.price}
                      </button>
                      <button
                        onClick={() =>
                          addToCart(
                            product.id,
                            product.price,
                            product.title,
                            product.description,
                            product.imgSrc
                          )
                        }
                        className="btn btn-warning"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
