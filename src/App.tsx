import { useRoutes } from "react-router-dom";
import routes from "./routes/app-routes";
import Navbar from "./components/navbar";
import { useState } from "react";
import { Toaster } from "sonner";

const App = () => {
  const [search, setSearch] = useState<string>("");
  const [cart, setCart] = useState<any>([]);
  const appRoutes = useRoutes(routes(search, cart, setCart));
  return (
    <>
      <Toaster position="top-right" richColors />
      <Navbar setSearch={setSearch} cartLength={cart.length} />
      <div className="p-6">{appRoutes}</div>
    </>
  );
};

export default App;
