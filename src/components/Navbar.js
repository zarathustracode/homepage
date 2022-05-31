import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [click, setclick] = useState(false)
  const navigation = [
    { name: 'Home', href: "/homepage", current: true },
    { name: 'Research', href: "/homeostasis", current: false },
    { name: 'Development', href: "/neural-response", current: false },
    { name: 'Data Science', href: "/learning", current: false },
    { name: 'About', href: "/about", current: false },
  ]
  return (
    <>
        <nav>
          <div className="lg:flex bg-gray-900 text-white sm:relative md:flex m-2 p-2">
            <div className=" text-blue-400 px-10 py-2 text-xl">
              <p className="text-center">
              Nebojša Gašparović
              </p>
              <p className="text-center text-xs">
              Data Scientist | Physicist | Neuroscientist
              </p>
              </div>
            {
                navigation.map(
                  (item, index) => (
                    <Link key={index} to={item.href}>
                    <div className=" text-gray-300 hover:bg-gray-700 px-3 py-2 text-xl hover:text-white delay-100 flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                      {item.name}
                      </div>
                  </Link>
                )
                )
            }

            </div>
        </nav>
    </>
  )
}

export default Navbar;