import { Link } from "react-router-dom";

const ProductCard = ({ product, setCart }: any) => {
  return (
    <div className="border border-gray-200 bg-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="rounded-md w-full h-48 object-cover"
        />
        <h3
          className="font-semibold text-lg mt-2 line-clamp-1"
          title={product.title}
        >
          {product.title}
        </h3>
      </Link>
      <p className="mt-2 text-sm text-gray-600 line-clamp-2">
        {product.description}
      </p>
      <p className="mt-2 font-medium text-base text-gray-800">
        ₹{product.price}
      </p>
      <button
        className="mt-2 bg-primary text-white px-4 py-1.5 w-full rounded text-sm hover:opacity-90 transition"
        onClick={() => setCart((prev: any) => [...prev, product])}
      >
        Add to Cart
      </button>
    </div>
  );
};
export default ProductCard;
