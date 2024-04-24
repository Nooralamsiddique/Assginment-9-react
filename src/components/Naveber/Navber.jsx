import { useContext } from "react";
import { FcHome } from "react-icons/fc";
import { IoIosContact } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Navber = () => {

    const { user, logOut } = useContext(AuthContext);


    const handelLogOut = () => {
        logOut()
            .then(() => console.log('User Logged Out Successfully.'))
            .catch(error => {
                console.error(error);
            })
    }

    const naveLink = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/aboutUs">About US</NavLink></li>
        <li><NavLink to="/contact">Contact Us</NavLink></li>
        <li><NavLink to="/userProfile">User Profile</NavLink></li>
        <li><NavLink to="/register">Registar</NavLink></li>

    </>
    const loginRegister = <>
        <li><NavLink to="/login">Login</NavLink></li>
        {/* <li><NavLink>LogOut</NavLink></li> */}
    </>



    return (
        <div className="max-w-[1220px] mx-auto">
            <div className="navbar mt-2 bg-green-400 rounded-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="dropdown-content mt-3 z-[1] p-2">
                            {
                                naveLink
                            }
                            {
                                loginRegister
                            }
                        </ul>
                    </div>
                    <FcHome className="text-4xl"></FcHome>
                    <a
                        className="text-2xl font-semibold ml-2">
                        <span className="text-purple-600 font-extrabold">e</span>Home</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            naveLink
                        }

                    </ul>
                </div>

                <div className="navbar-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="rounded-full">
                            {
                                user ? <img alt="" src={user?.photoURL} /> :
                                    <IoIosContact className="text-[42px] "></IoIosContact>
                            }
                        </div>
                    </div>

                    {
                        user ? <>
                            <span className="hover:">{user.email}</span>
                            <ul className="menu menu-horizontal px-1 sm:flex ">
                                {/* {
                                    loginRegister
                                } */}

                                <li onClick={handelLogOut} className="btn btn-sm py-[17px] ml-2">LogOut</li>

                            </ul>
                        </> : <ul className="menu menu-horizontal px-1 sm:flex ">
                            {
                                loginRegister
                            }
                        </ul>
                    }

                    {/* <ul className="menu menu-horizontal px-1 border sm:flex ">
                        {
                            loginRegister
                        }

                        <li onClick={handelLogOut} className="btn btn-sm py-[17px] ml-2">LogOut</li>

                    </ul> */}
                </div>




            </div>
        </div>
    );
};

export default Navber;