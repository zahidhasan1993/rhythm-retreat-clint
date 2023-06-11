import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-blue-200 text-left text-2xl text-base-content py-20">
          {/* Sidebar content here */}
          <NavLink
            to='/dashboard/manageclass'
            className={({ isActive }) =>
              isActive ? "text-amber-700 font-bold" : "hover:text-amber-700"
            }
          >
            <li>Manage Classes</li>
          </NavLink>
          <NavLink
            to='/dashboard/manageuser'
            className={({ isActive }) =>
              isActive ? "text-amber-700 font-bold" : "hover:text-amber-700"
            }
          >
            <li className="mt-10">Manage Users</li>
          </NavLink>
          <div className="divider my-10"></div>
          <Link to='/'>Home</Link>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
