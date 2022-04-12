import { Link } from "@reach/router";
import { HiShoppingCart } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <img
          width="80"
          height="80"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Capsule_Corp_Logo.svg/1200px-Capsule_Corp_Logo.svg.png"
          alt="capsule corp logo"
        />
      </Link>
      <ul>
        <li>
          <Link to="/">Catalogue</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <CartButton />
        </li>
      </ul>
    </nav>
  );
};

const CartButton = () => {
  function showMenu() {
    console.log("Cart pressed!");
  }

  return (
    <button className="cart-button" onClick={() => showMenu()}>
      <HiShoppingCart size={26} />
    </button>
  );
};

export default Navbar;
