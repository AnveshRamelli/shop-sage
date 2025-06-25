// import { RouteObject } from 'react-router-dom';
import ProductList from "../pages/product-list";
import ProductDetails from "../pages/product-details";
import Cart from "../pages/cart";
import Wishlist from "../pages/wishlist";

const routes: any = (search: string) => [
  {
    path: "/",
    element: <ProductList search={search}/>,
  },
  {
    path: "/product/:id",
    element: <ProductDetails />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/wishlist",
    element: <Wishlist />,
  },
];

export default routes;