import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [click, setclick] = useState(false)
  const navigation = [
    { name: 'Home', href: "/", current: true },
    { name: 'Homeostasis', href: "/homeostasis", current: false },
    { name: 'Graphs', href: "/graphs", current: false },
    { name: 'Learning', href: "/learning", current: false },
    { name: 'Correlation', href: "/correlations", current: false },
    { name: 'Response', href: "/neural-response", current: false },
    { name: 'About', href: "/about", current: false },
  ]
  return (
    <>
        <nav>
          <div className="flex bg-gray-900 text-white">
            {
                navigation.map(
                  (item, index) => (
                    <Link key={index} to={item.href}>
                    <div className=" text-gray-300 hover:bg-gray-700 px-3 py-2 hover:text-white delay-100">
                      {item.name}
                      </div>
                  </Link>
                )
                )
            }

            <Link key={navigation.length+1} to="/sign-in">
              <div className="absolute right-0 text-gray-300 hover:bg-gray-700 px-3 py-2 text-md hover:text-white delay-100">
                Sign In
                </div>
            </Link>
            </div>
        </nav>
    </>
  )
}

export default Navbar;