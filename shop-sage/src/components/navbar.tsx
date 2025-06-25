import { Link } from "react-router-dom";
import Search from "./search";

const Navbar = ({setSearch}:any) => {
  return (
    <nav className="flex justify-between items-center px-12 py-3 shadow-md ">
      <h1 className="text-2xl font-bold ">ShopSage</h1>
      <Search setSearch={setSearch}/>
      <ul className="flex gap-2">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/cart">
          <li>Cart</li>
        </Link>
        <Link to="/wishlist">
          <li>Wishlist</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
