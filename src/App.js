import logo from "./logo.svg";
import { useRoutes } from "react-router-dom";
import "./App.css";
import routes from "./Routes/routes";

function App() {
  const routing = useRoutes(routes);
  return <div>{routing}</div>;
}

export default App;
