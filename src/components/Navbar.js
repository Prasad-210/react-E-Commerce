import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [btnName, setBtnName] = useState('Light');

  return (
    <div className="flex justify-between p-4 shadow-lg bg-white">
      {/* Logo */}
      <Link to="/" className="text-3xl font-bold text-black hover:text-red-500 transition-all duration-300">
        AJIO
      </Link>

      {/* Menu Items */}
      <ul className="flex space-x-6 items-center">
        <li>
          <Link to="/" className="text-black hover:text-red-500 transition-all duration-300">HOME</Link>
        </li>
        <li>
          <Link to="/men" className="text-black hover:text-red-500 transition-all duration-300">MEN</Link>
        </li>
        <li>
          <Link to="/women" className="text-black hover:text-red-500 transition-all duration-300">WOMEN</Link>
        </li>
        <li>
          <Link to="/kid" className="text-black hover:text-red-500 transition-all duration-300">KID</Link>
        </li>
        <li>
          <Link to="/grocery" className="text-black hover:text-red-500 transition-all duration-300">GROCERY</Link>
        </li>
        <li className="text-black">CART</li>

        {/* Toggle Button */}
        <li>
          <button
            onClick={() => setBtnName(btnName === 'Light' ? "Dark" : "Light")}
            className="bg-purple-300 text-white py-2 px-4 rounded-md"
          >
            {btnName === 'Light' ? "Dark" : "Light"}
          </button>
        </li>
      </ul>
    </div>
  );
}
