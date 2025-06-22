import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-3 shadow-md ">
      <h1 className="text-2xl font-bold ">ShopSage</h1>
      <input type="text" placeholder="Search..." className="border border-gray-300 rounded-lg p-1 w-1/2"/>
      <ul className="flex gap-2">
        <Link to="/"><li>Home</li></Link>
        <Link to="/cart"><li>Cart</li></Link>
        <Link to="/wishlist"><li>Wishlist</li></Link>
      </ul>
    </nav>
  )
}

export default Navbar