const ProductCard = ({ product }: any) => {
  return (
    <div className="border border-gray-200 bg-gray-100 rounded-xl p-4">
      <img
        src={product.thumbnail}
        loading="lazy"
        alt={product.title}
        className="cursor-pointer rounded-lg mb-3 cursor-pointer"
      ></img>
      <h3 className="text-md font-semibold">{product.title}</h3>
      <p className="text-sm text-gray-600 mt-1">
        {product.description.slice(0, 75)}...
      </p>
      <p className="text-md mt-1">₹{product.price}</p>
      <button className="mt-2 bg-primary text-white px-4 py-1 rounded text-sm hover:opacity-90">
        Add to Cart
      </button>
    </div>
  );
};
export default ProductCard;
