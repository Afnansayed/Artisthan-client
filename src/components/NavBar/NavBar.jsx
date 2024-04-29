import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/Provider";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip as ReactTooltip } from 'react-tooltip'
const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [theme,setTheme] = useState(() => {
           return localStorage.getItem('theme') || 'light'
    });
    useEffect(()=> {
         localStorage.setItem('theme',theme)
          document.querySelector('html').setAttribute('data-theme',theme)
    },[theme])

    const handleTheme = e => {
        console.log(e.target.checked)
        if(e.target.checked){
            setTheme('dark');
        }else{
            setTheme('light')
        }
    }
    console.log(theme)

    const navLink = <>
        <li><NavLink to='/' className={({ isActive }) => isActive ? 'text-blue-400 font-bold border-blue-700 border-2 p-2' : 'font-bold border-1'}>Home</NavLink></li>
        {/* 2 */}
        <li><NavLink to='/addArt' className={({ isActive }) => isActive ? 'text-blue-400 font-bold border-blue-700 border-2 p-2' : 'font-bold border-1'}>Add Craft Item</NavLink></li>
        {/* 3 */}
        <li><NavLink to='/artList' className={({ isActive }) => isActive ? 'text-blue-400 font-bold border-blue-700 border-2 p-2' : 'font-bold border-1'}> My Art &Craft </NavLink></li>
        {/* 4 */}
        <li><NavLink to='/allArtList' className={({ isActive }) => isActive ? 'text-blue-400 font-bold border-blue-700 border-2 p-2' : 'font-bold border-1'}> All Art & craft List </NavLink></li>
        {/*  */}
        {
            user ? '' : <li><NavLink to='/logIn' className={({ isActive }) => isActive ? 'text-blue-400 font-bold border-blue-700 border-2 p-2' : 'font-bold border-1'}>Log In</NavLink></li>
        }
        {
            user ? '' : <li><NavLink to='/register' className={({ isActive }) => isActive ? 'text-blue-400 font-bold border-blue-700 border-2 p-2' : 'font-bold border-1'}>Register</NavLink></li>
        }
    </>
    const handleLogOut = () => {
        console.log('logOut')
        logOut()
            .then(() => {
                console.log('signOut SuccessFul');
            })
            .catch(error => {
                console.error(error);
            })
    }
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
            <div className="navbar-end  lg:gap-3">
                <div>
                    <label className="cursor-pointer grid place-items-center">
                        <input onChange={handleTheme} type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
                </div>
                {user &&
                    <div id="first" className="avatar tooltip tooltip-bottom"
                    // data-tip={user?.displayName
                    // }
                    >
                          <ReactTooltip
                          anchorId='first'
                          place="top"
                          content={user?.displayName}
                          >
                          </ReactTooltip>

                        <div className="w-12 rounded-full">
                            <img src={user?.photoURL} />
                        </div>
                    </div>
                }

                {
                    user ? <a className="btn bg-blue-700 hover:bg-sky-500 text-[#ffffff]" onClick={handleLogOut}>Log Out</a> : <Link to='/logIn'><p className="btn bg-blue-700 hover:bg-sky-500 text-[#ffffff]">LogIn</p></Link>
                }

            </div>
        </div>
    );
};

export default NavBar;