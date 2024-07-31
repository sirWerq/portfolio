import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavButton = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector("header");
      if (navbar) {
        if (window.scrollY > 0) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="w-full flex justify-center items-center bg-transparent fixed z-10 top-0 left-0">
        <div className="container flex items-center justify-end relative h-[80px]">
          <div className="flex items-center">
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              className={`block absolute top-0 right-4 lg:hidden h-full ${
                isOpen ? "hamburger-active" : ""
              }`}
              onClick={handleNavButton}
            >
              <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
            </button>
            <nav
              className={`${
                isOpen ? "block" : "hidden"
              } absolute top-full right-0 bg-white max-w-[250px] p-4 shadow-md rounded-md lg:block lg:static lg:bg-transparent lg:max-w-full lg:rounded-none lg:shadow-none`}
            >
              <ul className="block lg:flex">
                <li className="group">
                  <NavLink
                    to="/"
                    className="py-2 mx-8 text-sky-500 group-hover:text-blue-700 flex font-semibold cursor-pointer"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="group">
                  <NavLink
                    to="/projects"
                    className="py-2 mx-8 text-sky-500 group-hover:text-blue-700 flex font-semibold cursor-pointer"
                  >
                    Projects
                  </NavLink>
                </li>
                <li className="group">
                  <NavLink
                    to="/about"
                    className="py-2 mx-8 text-sky-500 group-hover:text-blue-700 flex font-semibold cursor-pointer"
                  >
                    About
                  </NavLink>
                </li>
                <li className="group">
                  <NavLink
                    to="/contact"
                    className="py-2 mx-8 text-yellow-500 group-hover:text-yellow-700 flex font-semibold cursor-pointer"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavbarComponent;
