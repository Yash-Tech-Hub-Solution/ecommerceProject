import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContex";
import dropdown_icon from "../Components/Assets/down-arrow.png";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
  const { allProducts } = useContext(ShopContext);

  return (
    <div className="shop-category">
      {/* Banner Image */}
      <img className="shopcategory-banner" src={props.banner} alt="Category Banner" />

      {/* Sorting Section */}
      <div className="shopcategory-indexSort">
        <p>
          <span>1-12 images</span> Out of 36.
        </p>
        <div className="shopcategory-sort">
          <span>Sort by</span>
          <img src={dropdown_icon} alt="Dropdown" className="dropdown-icon" />
        </div>
      </div>

      {/* Product Grid - LIMITED TO 12 ITEMS */}
      <div className="shopcategory-products">
        {allProducts
          .filter((item) => item.category === props.category)
          .slice(0, 12) // ✅ LIMIT DISPLAY TO ONLY 12 PRODUCTS
          .map((item, i) => (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
      </div>
      <div className="shopcategory-loadmore">
        <p>Explore More</p>
      </div>
    </div>
  );
};

export default ShopCategory;
