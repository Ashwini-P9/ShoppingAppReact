import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { items } from "./Data";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const NavBar = ({ setData, Cart }) => {
 // console.log(useLocation());

 const location=useLocation()

  const navigate = useNavigate(); //!to dirct to different route
  const [searchTerm, setSearchTerm] = useState("");

  const filterByCategory = (category) => {
    const ele = items.filter((product) => product.category === category);
    //! console.log(ele);    filterby category --array
    setData(ele);
  };

  const filterByPrice = (price) => {
    const ele1 = items.filter((product) => product.price >= price);
    //! console.log(ele);    filterby category --array
    setData(ele1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
  };
  return (
    <>
      <header className="sticky-top">
        <div className="nav-bar">
          <NavLink to={"/"} className="brand">
            E-cart
          </NavLink>

          <form onSubmit={handleSubmit} className="search-bar">
            <input
            
              type="text"
              placeholder="Search Products"
            
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              
            />
            <span><FaSearch /></span>
             
            
          </form>

          <NavLink to={"/cart"} className="cart">
            <button type="button" className="btn btn-primary position-relative">
            <FaShoppingCart style={{fontSize:"1.5rem"}} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
               {Cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
         
          </NavLink>
        </div>
      {
        location.pathname=='/' &&(
      
        <div className="nav-bar-wrapper">
          <div className="items">Filter by {"->"}</div>
          <div onClick={() => setData(items)} className="items">
            No Filter
          </div>
          <div onClick={() => filterByCategory("mobiles")} className="items">
            Mobiles
          </div>
          <div onClick={() => filterByCategory("laptops")} className="items">
            Laptop
          </div>
          <div onClick={() => filterByCategory("tablets")} className="items">
            Tablets
          </div>
          <div onClick={() => filterByPrice(29999)} className="items">
            {">="}29999
          </div>
          <div onClick={() => filterByPrice(29999)} className="items">
            {">="}49000
          </div>
          <div onClick={() => filterByPrice(29999)} className="items">
            {">="}69000
          </div>
          <div onClick={() => filterByPrice(29999)} className="items">
            {">="}89000
          </div>
        </div>)}
      </header>
    </>
  );
};

export default NavBar;
