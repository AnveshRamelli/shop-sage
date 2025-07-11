import { useEffect, useState } from "react";
import ProductCard from "../components/product-card";
import Sidebar from "../components/sidebar";

const ProductList = ({ search, setCart }: any) => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log(search);

  const baseUrl = "https://dummyjson.com/products";

  const fetchProducts = async () => {
    try {
      setLoading(true);
      let url = baseUrl;
      if (search) {
        url += `/search?q=${search}`;
      } else {
        if (selectedCategory) {
          url += `/category/${selectedCategory}`;
        }
      }
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory, search]);

  return (
    <div className="grid md:grid-cols-4 gap-6">
      <Sidebar
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      {loading && <h2 className="text-2xl">Loading...</h2>}
      <section className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product: any) => (
          <ProductCard key={product.id} product={product} setCart={setCart}/>
        ))}
      </section>
    </div>
  );
};

export default ProductList;
