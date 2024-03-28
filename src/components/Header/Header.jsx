import { BiMenu } from "react-icons/bi";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
      <header
        className={`fixed z-10 w-full flex justify-between p-4 items-center bg-black transition duration-300 ${
          isScrolled ? "bg-black" : ""
        }`}
      >
        <div className="flex w-full items-center justify-between px-[20px] py-[1px] lg:container lg:mx-auto lg:px-20">
          <Link
            to="/"
            className="flex items-center text-2xl z-10 text-white font-bold border-white"
          >
            Propper.
          </Link>
          <BiMenu
            className="text-3xl z-50 text-white lg:hidden"
            onClick={() => setShow(!show)}
          />
          <div className="hidden justify-between items-center lg:flex lg:w-auto">
            <ul className="lg:flex gap-x-4 hidden cursor-pointer">
              <li>
                <NavLink
                  to=""
                  className="text-sm font-bold block lg:inline-block z-10 relative underline underline-offset-1 text-gray-500 hover:text-blue-50"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="about"
                  className="text-sm font-bold block lg:inline-block z-10 relative text-gray-500 hover:text-blue-50"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="Gallery"
                  className="text-sm font-bold block lg:inline-block z-10 relative text-gray-500 hover:text-blue-50"
                >
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="pricing"
                  className="text-sm font-bold block lg:inline-block z-10 relative text-gray-500 hover:text-blue-50"
                >
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="contact"
                  className="text-sm font-bold block lg:inline-block z-10 relative text-gray-500 hover:text-blue-50"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
      {show && (
        <section>
          <div className="fixed text-gray-400 left-0 top-0 w-full h-screen bg-black/70 px-9 py-[50px] flex-col z-10">
            <ul className="flex flex-col fixed w-full h-full items-center ml-20 mt-4">
              <li>
                <NavLink
                  to=""
                  className="text-2xl font-bold block lg:inline-block p-2 z-10 relative underline underline-offset-1 hover:text-blue-50"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="about"
                  className="text-2xl font-bold block lg:inline-block p-2 z-10 relative hover:text-blue-50"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="Gallery"
                  className="text-2xl font-bold block lg:inline-block p-2 z-10 relative hover:text-blue-50"
                >
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="pricing"
                  className="text-2xl font-bold block lg:inline-block p-2 z-10 relative hover:text-blue-50"
                >
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="contact"
                  className="text-2xl font-bold block lg:inline-block p-2 z-10 relative hover:text-blue-50"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </section>
      )}
    </div>
  );
};

export default Header;

}

export default Header;

