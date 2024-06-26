import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../authentication/AuthProiver";
import { toast } from "react-toastify";
import cartImg from "../../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png";
import useCart from "../../../hooks/useCart";
import { BsCart4 } from "react-icons/bs";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [cart] = useCart()

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("LogOut successfully!");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="navbar bg-[#15151599] fixed z-40 max-w-[1440px] mx-auto p-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-[#EEFF25]" : "text-white"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/asdg"
                className={({ isActive }) =>
                  isActive ? "text-[#EEFF25]" : "text-white"
                }
              >
                CONTACT US
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashbord"
                className={({ isActive }) =>
                  isActive ? "text-[#EEFF25]" : "text-white"
                }
              >
                DASHBOARD
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/our-menu"
                className={({ isActive }) =>
                  isActive ? "text-[#EEFF25]" : "text-white"
                }
              >
                OUR MENU
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/our-shop"
                className={({ isActive }) =>
                  isActive ? "text-[#EEFF25]" : "text-white"
                }
              >
                OUR SHOP
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashbord">
                {/* <img width={'50px'} src={cartImg} alt="" />///////// */}
                <BsCart4 className="text-3xl text-green-500" />
                <div className="badge badge-secondary absolute left-8 top-0">{cart.length}</div>
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to="/">
          <div className="text-white">
            <h2 className="text-xl md:text-3xl font-extrabold">Bistro Boss</h2>
            <p className="text-xs md:text-xl font-medium">Restaurant</p>
          </div>
        </Link>
      </div>

      <div className="navbar-end">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-[#EEFF25]" : "text-white"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/asdg"
                className={({ isActive }) =>
                  isActive ? "text-[#EEFF25]" : "text-white"
                }
              >
                CONTACT US
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashbord"
                className={({ isActive }) =>
                  isActive ? "text-[#EEFF25]" : "text-white"
                }
              >
                DASHBOARD
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/our-menu"
                className={({ isActive }) =>
                  isActive ? "text-[#EEFF25]" : "text-white"
                }
              >
                OUR MENU
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/our-shop"
                className={({ isActive }) =>
                  isActive ? "text-[#EEFF25]" : "text-white"
                }
              >
                OUR SHOP
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashbord/cart">
                {/* <img width={'50px'} src={cartImg} alt="" />///////// */}
                <BsCart4 className="text-3xl text-green-500" />
                <div className="badge badge-secondary absolute left-8 top-0">{cart.length}</div>
              </NavLink>
            </li>
          </ul>
        </div>
        {user ? (
          <button
            onClick={handleLogOut}
            className="btn bg-red-500 hover:bg-red-400 border-0 text-white"
          >
            Sign Out
          </button>
        ) : (
          <Link
            to="/login"
            className="btn bg-red-500 hover:bg-red-400 border-0 text-white"
          >
            Sign Up
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
