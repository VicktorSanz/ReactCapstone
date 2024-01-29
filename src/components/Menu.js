import React from "react";
import food from "../food";

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>This weeks specials!</h2>
        <button>Online Menu</button>
      </div>
      <div className="cards">
        {food.map((food) => (
          <div key={food.id} className="menu-items">
            <img src={food.image} alt="" />
            <div className="menu-content">
              <div className="heading">
                <h5>{food.title}</h5>
                <p>${food.price}</p>
              </div>
              <p>{food.description}</p>
              <button2 className="orderbtn">Order a delivery</button2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
