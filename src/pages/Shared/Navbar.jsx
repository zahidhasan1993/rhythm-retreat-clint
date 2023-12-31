import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const { user,logOut } = useAuth();
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  const handleLogOut = () => {
    logOut()
    .then(() => {})
    .catch(() => {})
  }
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-blue-700 font-bold" : "hover:text-blue-700"
        }
      >
        <li className="pr-3 ">Home</li>
      </NavLink>
      <NavLink
        to="/instructor"
        className={({ isActive }) =>
          isActive ? "text-blue-700 font-bold" : "hover:text-blue-700"
        }
      >
        <li className="pr-3 ">Instructors</li>
      </NavLink>
      <NavLink
        to="/classes"
        className={({ isActive }) =>
          isActive ? "text-blue-700 font-bold" : "hover:text-blue-700"
        }
      >
        <li className="pr-3 ">Classes</li>
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive ? "text-blue-700 font-bold" : "hover:text-blue-700"
        }
      >
        {
          user ? <li className="pr-3 ">Dashboard</li> : <></>
        }
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base fixed z-10 bg-black bg-opacity-60 container mx-auto text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 md:text-white text-black rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Rhythm-Retreat</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {hover ? <p className="font-bold mr-1">{user.displayName}</p> : <></>}
        {user ? (
          <>
            {" "}
            <div
              className="avatar online mr-2"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
              <div className="w-10 rounded-full">
                <img src={user.photoURL} />
              </div>
            </div>
            <button
              onClick={handleLogOut}
              className="btn btn-outline btn-error"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="btn btn-outline text-white hover:bg-white hover:border-none hover:text-black"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
