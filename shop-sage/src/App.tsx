import { useRoutes } from "react-router-dom";
import routes from "./routes/app-routes";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="p-6">{useRoutes(routes)}</div>
    </>
  );
};

export default App;