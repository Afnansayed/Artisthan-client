import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/Provider";
const LogIn = () => {
    const {name} = useContext(AuthContext);
    console.log(name)
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content">
                <div className="card shrink-0  shadow-2xl bg-base-100 ">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-blue-700 hover:bg-sky-500 text-[#ffffff]">Login</button>
                        </div>
                    </form>
                    <div className="flex justify-center gap-3">
                        <p className="btn bg-blue-700 hover:bg-sky-500"><FaGoogle className="text-[#ffffff]" /></p>
                        <p className="btn bg-blue-700 hover:bg-sky-500"><FaGithub className="text-[#ffffff]" /></p>
                    </div>
                   <p className="p-5">If you do not have an account please <Link to='/register' className="text-blue-400">create a Account</Link></p>
                </div>
            </div>
        </div>
    );
};

export default LogIn;