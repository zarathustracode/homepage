import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [click, setclick] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
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
          <div className="sm:flex bg-gray-900 text-white m-2 p-2">
              <div className="p-4 space-y-2 lg:hidden" onClick={() => setIsNavOpen((prev) => !prev)}>
                <span className="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
                <span className="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
                <span className="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
              </div>
              <div className="text-blue-400 px-10 py-2 text-xl">
                <p className="text-center">
                Nebojša Gašparović
                </p>
                <p className="text-center text-xs">
                Data Scientist | Physicist | Neuroscientist
                </p>
              </div>
              <ul className= "lg:flex hidden">
              {
                  navigation.map(
                    (item, index) => (
                      <li>
                        <Link key={index} to={item.href}>
                        <div className=" text-gray-300 hover:bg-gray-700 px-3 py-2 text-xl hover:text-white delay-100">
                          {item.name}
                          </div>
                        </Link>
                    </li>
                  )
                  )
              }
              </ul>
              <div className= {isNavOpen ? "sm:relative mt-20 lg:hidden": "hidden"}>
              {
                  navigation.map(
                    (item, index) => (
                        <Link key={index} to={item.href} onClick={() => setIsNavOpen((prev) => !prev)}>
                        <div className=" text-center text-gray-300 hover:bg-gray-700 px-3 py-2 text-xl hover:text-white delay-100">
                          {item.name}
                          </div>
                        </Link>
                  )
                  )
              }
              </div>

            </div>
        </nav>
    </>
  )
}

export default Navbar;