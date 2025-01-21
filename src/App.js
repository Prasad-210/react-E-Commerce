import "./App.css";
import Navbar from "./components/Navbar";
// import ProductCards from "./components/ProductCard";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  );
}



export default App;
