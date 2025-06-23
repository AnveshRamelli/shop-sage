import { useEffect, useState } from "react";

const Sidebar = ({selectedCategory, setSelectedCategory}:any) => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const res = await fetch("https://dummyjson.com/products/categories");
    const data = await res.json();
    setCategories(data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  if(!categories.length) return <div>Loading...</div>;

  return (
    <aside className="p-4 md:col-span-1 bg-gray-100">
      <h2 className="font-semibold text-lg">Categories</h2>
      <ul className="mt-2">
        <li className="px-4 py-2 cursor-pointer hover:bg-gray-200 transition" onClick={() => setSelectedCategory(null)}>All Products</li>
        {categories.length && categories.map((category: any) => (
          <li
            key={category.slug}
            className={`px-4 py-2 cursor-pointer hover:bg-gray-200 transition ${
              selectedCategory === category.slug ? "bg-gray-200" : ""
            }`}
            onClick={() => setSelectedCategory(category.slug)}
          > 
            {category.name}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
