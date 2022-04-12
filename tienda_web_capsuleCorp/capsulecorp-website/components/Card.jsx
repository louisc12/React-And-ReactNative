import React from "react";
import { Link } from "@reach/router";
//Context API

const Card = ({ image, route }) => {
  return (
    <Link to={`${route}`}>
      <div className="product-card">
        <div>
          <div>
            <p>Product Title</p>
            <p>$1,200</p>
          </div>
        </div>
        <img src={image} width="140" height="140" alt="product" />
      </div>
    </Link>
  );
};

export default Card;
