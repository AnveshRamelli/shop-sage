import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);

  const fetchProductDetails = async () => {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();
    setProduct(data);
  };

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  if (!product) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-4 flex flex-col sm:flex-row gap-4">
      <div className="flex-1">
        <img
          src={product?.thumbnail}
          alt={product?.title}
          className="w-full max-h-96 object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex-1">
        <div>
          <h2 className="text-2xl font-semibold mt-4">{product?.title}</h2>
          <p className="mt-2 text-gray-600">{product?.description}</p>
          <p className="mt-2 font-medium text-lg">₹{product?.price}</p>
          <button className="mt-4 bg-primary text-white px-4 py-2 w-full sm:w-1/3 rounded hover:opacity-90">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
