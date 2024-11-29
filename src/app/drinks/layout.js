import Image from "next/image";
import React from "react";

const DrinksLayout = ({ children }) => {
  return (
    <div className=" text-center  mt-4">
      <div className="carousel rounded-box">
        <div className="carousel-item h-32">
          <img
            src="https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg"
            alt="drinks"
          />
        </div>
        <div className="carousel-item h-32">
          <img
            src="https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg"
            alt="Drink"
          />
        </div>
        <div className="carousel-item h-32">
          <img
            src="https://www.thecocktaildb.com/images/media/drink/6gdohq1681212476.jpg"
            alt="Drink"
          />
        </div>
      </div>
      {children}
    </div>
  );
};

export default DrinksLayout;
