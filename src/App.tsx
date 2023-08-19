import routes from "./App.route";
import { useRoutes } from "react-router-dom";

function App() {
  const routing = useRoutes(routes);
  return routing;
}

export default App;
