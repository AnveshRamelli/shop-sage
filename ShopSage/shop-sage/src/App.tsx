import { useRoutes } from "react-router-dom";
import routes from "./routes/app-routes";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <>
    <Navbar />
      {useRoutes(routes)}
    </>
  )
}

export default App;