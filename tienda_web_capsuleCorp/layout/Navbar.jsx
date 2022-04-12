import { HiShoppingCart } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav>
      <img
        width="80"
        height="80"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Capsule_Corp_Logo.svg/1200px-Capsule_Corp_Logo.svg.png"
        alt="Capsule Corp logo"
      />
      <ul>
        <li>Catalogue</li>
        <li>About Us</li>
        <li>
          <Icon />
        </li>
      </ul>
    </nav>
  );
};

const Icon = () => {
  return <HiShoppingCart size={26} />;
};

export default Navbar;
