import React, { useEffect, useState } from "react";
import Container from "../shared/Container";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.png"

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  const links = (
    <>
      <li>
        <button
          onClick={() => handleScroll("home")}
          className="hover:text-[#C47623]"
        >
          Home
        </button>
      </li>
      <li>
        <button
          onClick={() => handleScroll("about")}
          className="hover:text-[#C47623]"
        >
          About Me
        </button>
      </li>
      <li>
        <button
          onClick={() => handleScroll("skills")}
          className="hover:text-[#C47623]"
        >
          Skills
        </button>
      </li>
      <li>
        <button
          onClick={() => handleScroll("education")}
          className="hover:text-[#C47623]"
        >
          Education
        </button>
      </li>
      <li>
        <button
          onClick={() => handleScroll("projects")}
          className="hover:text-[#C47623]"
        >
          Projects
        </button>
      </li>
      <li>
        <button
          onClick={() => handleScroll("contact")}
          className="hover:text-[#C47623]"
        >
          Contact
        </button>
      </li>
    </>
  );
  return (
    <div className="fixed w-full z-10">
      <nav
        className={`transition-all duration-300 ${
          scrolling ? "bg-black shadow-md" : "bg-transparent"
        }`}
      >
        <Container>
          <div className="navbar justify-between">
            <div className="">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  {links}
                </ul>
              </div>
              <Link to="/" className="flex items-center gap-2 text-3xl font-bold"> <img className="w-8" src={logo} alt="" /> Riyad</Link>
            </div>
            <div className="">
              <div className="hidden lg:block">
                <ul className="flex gap-6 items-center px-1">{links}</ul>
              </div>
              <button
                onClick={() => handleScroll("contact")}
                className="ml-4"
              >
                Hire Me
              </button>
            </div>
          </div>
        </Container>
      </nav>
    </div>
  );
};

export default Navbar;
