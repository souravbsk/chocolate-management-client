import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
function App() {
  return <div className="py-16 px-15 md:px-28">
    <Header></Header>
    <Outlet></Outlet>
  </div>;
}

export default App;
