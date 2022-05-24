import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [click, setclick] = useState(false)
  return (
    <>
        <nav>
          <div className="flex bg-blue-800 m-4 p-4 text-center text-white">
            <div className="flex m-2 p-2 text-center bg-blue-400">
            <Link to="/">Home</Link>
            </div>
            <div className="flex m-2 p-2 text-center bg-blue-400">
            <Link to="/lif">LIF</Link>
            </div>
            <div className="flex m-2 p-2 text-center bg-blue-400">
            <Link to="/about">About</Link>
            </div>
          </div>
        </nav>
    </>
  )
}

export default Navbar;