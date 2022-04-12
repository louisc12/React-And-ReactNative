import React from "react";
import { Link } from "@reach/router";
//Context API

const Card = ({ image, route, name, price }) => {
  return (
    <Link to={`${route}`}>
      <div className="product-card">
        <div>
          <div>
            <p>{name}</p>
            <p>${price}</p>
          </div>
        </div>
        <img src={image} width="140" height="140" alt="product" />
      </div>
    </Link>
  );
};

export default Card;
