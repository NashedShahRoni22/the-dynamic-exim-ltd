import React from "react";
import { MdLocationOn, MdCall, MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../images/logo.webp";
const menuItems = (
  <>
    <li>
      <Link>Home</Link>
    </li>
    <li>
      <Link>About</Link>
    </li>
    <li>
      <Link>Products</Link>
    </li>
    <li>
      <Link>Gallery</Link>
    </li>
    <li>
      <Link>Contact</Link>
    </li>
  </>
);

const Header = () => {
  return (
    <section>
      {/* topbar */}
      <div className="bg-[#EB4438] text-white text-sm font-semibold py-3">
        <div className="flex justify-between container mx-auto">
          <p>Welcome to The Dynamic Export Import LTD</p>
          <p className="flex items-center">
            <MdLocationOn /> Mastarpara Socity, Road 1230
          </p>
        </div>
      </div>
      {/* navbar */}
      <div className="bg-[#0B2239]">
        <div className="navbar container mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
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
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {menuItems}
              </ul>
            </div>
            <div>
              <img src={logo} alt="" className="h-12 w-24" />
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-white font-semibold">
              {menuItems}
            </ul>
          </div>
          <div className="navbar-end text-white hidden lg:flex gap-4">
            <div className="flex items-center gap-2">
              <MdCall className="text-4xl text-[#EB4438]" />
              <p className="text-sm">
                Call us now! <br /> +880-1941422183
              </p>
            </div>
            <div className="flex items-center gap-2 ml-4">
              <MdEmail className="text-4xl text-[#EB4438]" />
              <p className="text-sm">
                Talk with us! <br /> moin@dynamic-exim.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
