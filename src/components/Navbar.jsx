import {  Link, NavLink } from "react-router-dom";
import { AuthContext } from "../layouts/AuthProvider";
import { useContext } from "react";
import { FaUser } from "react-icons/fa";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
    const links =(

<>
<li><NavLink to='/'>Home</NavLink></li>
<li><NavLink to='/login'>Login</NavLink></li>
<li><NavLink to='/register'>Register</NavLink></li>
<li><NavLink to='/movies'>Add Movies</NavLink></li>
<li><NavLink to='/favorites'>My Favorites</NavLink></li>
</>
    );
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><span className="text-red-500">MARVEL</span> MOVIES</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end items-center lg:flex-col">
        {user && user.email ? (
          <div className="relative flex items-center gap-4">
            <div className="group relative">
              <img className="w-[40px] h-[40px] rounded-full cursor-pointer" src={user?.photoURL || <FaUser></FaUser>} alt="User" />
              <div className="absolute left-1/2 transform -translate-x-1/2 top-full mb-2 hidden group-hover:block bg-gray-700 text-white text-sm p-2 rounded">
              {user.displayName || user.email}
              </div>
            </div>
            <button className="btn bg-white text-yellow-500" onClick={logOut}>Log-Out</button>
          </div>
        ) : (
        <div className=" md:flex-col">
          <Link className="btn bg-white text-green-500" to='/login'>Login</Link>
          <Link className="btn bg-white text-green-500" to='/register'>Register</Link>
        </div>
        )}
      </div>
</div>
    );
};

export default Navbar;