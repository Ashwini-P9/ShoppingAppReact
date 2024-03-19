import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from './Product';
import { items } from './Data';
import toast, { Toaster } from "react-hot-toast";
 
const ProductDetails = ( {cart,setCart}) => {
  const { id } = useParams();
  const [product, setproduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]); //!filter according to category

  useEffect(() => {
    const filterProduct = items.filter((product) => product.id == id);
    //console.log(filterProduct);
    setproduct(filterProduct[0]);

    const relatedProducts = items.filter(
      (p) => p.category === product.category
    );
    //console.log('relatedProduct=',relatedProducts);
    setRelatedProducts(relatedProducts);
  }, [id, product.category]);


   //!AddTo Cart
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
      <div className="container con">
        <div className="img">
          <img src={product.imgSrc} alt="img" />
        </div>
        <div className="text-center">
          <h1 className="card-title">{product.title}</h1>
          <p className="card-text">{product.description}</p>
          <button className="btn btn-primary mx-3">{product.price} ₹</button>
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
           className="btn btn-warning">Add to Cart</button>
        </div>

      </div>
      <h1 className="text-center">Related Products</h1>
      <Product cart={cart} setCart={setCart} items={relatedProducts} />
    </>
  );
};

export default ProductDetails;
