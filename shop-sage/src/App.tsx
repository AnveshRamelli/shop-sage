import { useRoutes } from "react-router-dom";
import routes from "./routes/app-routes";
import Navbar from "./components/navbar";
import { useState } from "react";

const App = () => {
  const [search, setSearch] = useState<string>("");
  const appRoutes = useRoutes(routes(search));
  return (
    <>
      <Navbar setSearch={setSearch} />
      <div className="p-6">{appRoutes}</div>
    </>
  );
};

export default App;
