import { Link } from "react-router-dom";

const Cart = ({ cart, setCart }: any) => {
  if (cart.length === 0)
    return (
      <div className="p-4 max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600">Cart is empty</h2>
        <Link to={"/"}><button className="mt-2 bg-violet-600 text-white p-3 w-1/2 rounded text-lg hover:opacity-90 transition">Return to shop</button></Link>
      </div>
    );
  return (
    <div className="p-1 mx-auto max-w-2xl">
      <h2 className="text-3xl font-bold text-blue-600 text-center mb-5">Your Cart</h2>
      {cart.map((item: any) => (
        <div key={item.id} className="border border-gray-200 grid grid-cols-3 gap-4 items-center">
          <div>
            <img src={item.thumbnail} alt={item.title} className="w-24"></img>
          </div>
          <div className="flex flex-col justify-center">
            <p>{item.title}</p>
            <p>Rs. {item.price}</p>
          </div>
          <div className="">
            <button
              className="bg-rose-700 hover:bg-rose-600 text-white text-lg font-semibold px-4 py-2 rounded-lg"
              onClick={() => {
                setCart((prev: any) =>
                  prev.filter((product: any) => product.id !== item.id)
                );
              }}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
