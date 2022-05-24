import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [click, setclick] = useState(false)
  return (
    <>
        <nav>
          <div className="flex bg-blue-800 m-4 p-4 text-center text-white rounded-xl">
            <Link to="/"><div className="flex m-2 p-2 text-center bg-blue-400  rounded-sm outline outline-blue-100 hover:bg-blue-200 delay-100">Home</div></Link>
            <Link to="/lif"><div className="flex m-2 p-2 text-center bg-blue-400  rounded-sm outline outline-blue-100 hover:bg-blue-200 delay-100">LIF</div></Link>
            <Link to="/about"><div className="flex m-2 p-2 text-center bg-blue-400  rounded-sm outline outline-blue-100 hover:bg-blue-200 delay-100">About</div></Link>
            
          </div>
        </nav>
    </>
  )
}

export default Navbar;