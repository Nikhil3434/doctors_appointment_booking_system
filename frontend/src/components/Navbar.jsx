import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [token, setToken] = useState(true); // Simulated authentication state

  const handleLogout = () => {
    setToken(false); // Setting token to false (user logged out)
    setShowProfileMenu(false); // Closing the dropdown
    navigate("/login"); // Redirecting to login page
  };

  return (
    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-300 relative">
      {/* Logo */}
      <img
        className="w-40 cursor-pointer"
        src={assets.logo}
        alt="Logo"
        onClick={() => navigate("/")}
      />

      {/* Navbar Links (Desktop) */}
      <ul className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
        <NavLink to="/" className="hover:text-blue-500">
          HOME
        </NavLink>
        <NavLink to="/all-doctors" className="hover:text-blue-500">
          ALL DOCTORS
        </NavLink>
        <NavLink to="/about" className="hover:text-blue-500">
          ABOUT
        </NavLink>
        <NavLink to="/contact" className="hover:text-blue-500">
          CONTACT
        </NavLink>
      </ul>

      {/* Mobile Menu Button */}
      <img
        onClick={() => setShowMenu(true)}
        className="w-6 md:hidden"
        src={assets.menu_icon}
        alt="Menu"
      />

      {/* Profile Section */}
      <div className="relative flex items-center">
        {token ? (
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          >
            <img
              className="w-10 h-10 rounded-full border border-gray-300"
              src={assets.profile_pic}
              alt="Profile"
            />
            <img className="w-4" src={assets.dropdown_icon} alt="Dropdown" />
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-full font-medium"
          >
            Create Account
          </button>
        )}

        {/* Profile Dropdown Menu */}
        {showProfileMenu && (
          <div className="absolute top-12 right-0 bg-white shadow-md rounded-md w-44 py-2 text-sm">
            <button
              onClick={() => {
                navigate("/my-profile");
                setShowProfileMenu(false);
              }}
              className="block px-4 py-2 text-gray-700 hover:text-black hover:bg-gray-100 cursor-pointer w-full text-left"
            >
              My Profile
            </button>
            <button
              onClick={() => {
                navigate("/my-appointments");
                setShowProfileMenu(false);
              }}
              className="block px-4 py-2 text-gray-700 hover:text-black hover:bg-gray-100 cursor-pointer w-full text-left"
            >
              My Appointments
            </button>
            <button
              onClick={handleLogout}
              className="block px-4 py-2 text-red-600 hover:text-black hover:bg-gray-100 cursor-pointer w-full text-left"
            >
              Logout
            </button>
          </div>
        )}
      </div>

      {/* Mobile Responsive Dropdown Menu */}
      <div
        className={` ${
          showMenu ? "fixed w-full" : "h-0 w-0"
        } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
      >
        <div className="flex items-center justify-between px-5 py-5">
          <img className="w-36" src={assets.logo} alt="Logo" />
          <img
            className="w-7"
            onClick={() => setShowMenu(false)}
            src={assets.cross_icon}
            alt="Close"
          />
        </div>
        <ul className="flex flex-col item-gap-2 mt-5 px-5 text-lg font-medium">
          <NavLink
            className="px-4 py-2 rounded inline-block"
            onClick={() => setShowMenu(false)}
            to="/" 
          ><p> Home</p>
           
          </NavLink>
          <NavLink
            className="px-4 py-2 rounded inline-block"
            onClick={() => setShowMenu(false)}
            to="/doctors"
          >
            <p>All Doctors</p>
        
          </NavLink>
          <NavLink
            className="px-4 py-2 rounded inline-block"
            onClick={() => setShowMenu(false)}
            to="/about"
          >
            <p>ABOUT</p>
            
          </NavLink>
          <NavLink
            className="px-4 py-2 rounded inline-block"
            onClick={() => setShowMenu(false)}
            to="/contact"
          >
            <p>CONTACT</p>
            
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
