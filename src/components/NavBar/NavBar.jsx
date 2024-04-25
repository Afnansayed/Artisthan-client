import { NavLink } from "react-router-dom";


const NavBar = () => {
    const navLink = <>
        <li><NavLink to='/' className={({ isActive }) => isActive ? 'text-blue-400 font-bold border-blue-700 border-2 p-2' : 'font-bold border-1'}>Home</NavLink></li>
        {/*  */}
        <li><NavLink to='/logIn' className={({ isActive }) => isActive ? 'text-blue-400 font-bold border-blue-700 border-2 p-2' : 'font-bold border-1'}>Log In</NavLink></li>
        {/*  */}
        <li><NavLink to='/register' className={({ isActive }) => isActive ? 'text-blue-400 font-bold border-blue-700 border-2 p-2' : 'font-bold border-1'}>Register</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl "> <span className="uppercase">Art</span>isthan</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                <div className="avatar">
                    <div className="w-12 rounded-full">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default NavBar;