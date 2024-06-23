import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar bg-[#15151599] fixed z-40 max-w-[1440px] mx-auto p-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to='/' className={({ isActive }) =>
                            isActive ? "text-[#EEFF25]" : "text-white"
                        }>Home</NavLink></li>
                        <li><NavLink className={({ isActive }) =>
                            isActive ? "text-[#EEFF25]" : "text-white"
                        }>CONTACT us</NavLink></li>
                        <li><NavLink className={({ isActive }) =>
                            isActive ? "text-[#EEFF25]" : "text-white"
                        }>DASHBOARD</NavLink></li>
                        <li><NavLink to="/our-menu" className={({ isActive }) =>
                            isActive ? "text-[#EEFF25]" : "text-white"
                        }>Our Menu</NavLink></li>
                        <li><NavLink to='/our-shop' className={({ isActive }) =>
                            isActive ? "text-[#EEFF25]" : "text-white"
                        }>Our Shop</NavLink></li>
                    </ul>
                </div>
                <Link to='/'>
                    <div className="text-white">
                        <h2 className="text-xl md:text-3xl font-extrabold">Bistro Boss</h2>
                        <p className="text-xs md:text-xl font-medium">Restaurant</p>
                    </div></Link>
            </div>

            <div className="navbar-end">
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold">
                        <li><NavLink to='/' className={({ isActive }) =>
                            isActive ? "text-[#EEFF25]" : "text-white"
                        }>Home</NavLink></li>
                        <li><NavLink to='/asdg' className={({ isActive }) =>
                            isActive ? "text-[#EEFF25]" : "text-white"
                        }>CONTACT US</NavLink></li>
                        <li><NavLink to='/sdg' className={({ isActive }) =>
                            isActive ? "text-[#EEFF25]" : "text-white"
                        }>DASHBOARD</NavLink></li>
                        <li><NavLink to='/our-menu' className={({ isActive }) =>
                            isActive ? "text-[#EEFF25]" : "text-white"
                        }>OUR MENU</NavLink></li>
                        <li><NavLink to='/our-shop' className={({ isActive }) =>
                            isActive ? "text-[#EEFF25]" : "text-white"
                        }>OUR SHOP</NavLink></li>
                    </ul>
                </div>
                <Link to="/login" className="btn bg-red-500 hover:bg-red-400 border-0 text-white">Sign Up</Link>
            </div>
        </div>
    );
};

export default NavBar;