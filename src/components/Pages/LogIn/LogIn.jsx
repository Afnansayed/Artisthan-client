import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/Provider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LogIn = () => {
    const {logInUser,google,gitHub} = useContext(AuthContext);
    
    const handleLogIn = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
       console.log(email,password)

        //login with email and password
        logInUser(email,password)
        .then(res => {
            console.log(res.user)
            toast.success('LogIn successFully')
        })
        .catch(error => {
            console.log(error)
            toast.error(error.message)
        })
    }

            //google
            const handleGoogle =() => {
                google()
                .then(res => {
                    console.log(res.user)
                })
                .catch(error => {
                    console.log(error)
                })
             }
             //gitHub 
             const handleGithub = () => {
              //  console.log('github')
                gitHub()
                .then(res => {
                    console.log(res.user)
                })
                .catch(error => {
                    console.error(error)
                })
             }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content">
                <div className="card shrink-0  shadow-2xl bg-base-100 ">
                    <form onSubmit={handleLogIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required name="password" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-blue-700 hover:bg-sky-500 text-[#ffffff]">Login</button>
                        </div>
                    </form>
                    <div className="flex justify-center gap-3">
                        <p className="btn bg-blue-700 hover:bg-sky-500" onClick={handleGoogle}><FaGoogle className="text-[#ffffff]" /></p>
                        <p className="btn bg-blue-700 hover:bg-sky-500" onClick={handleGithub}><FaGithub className="text-[#ffffff]" /></p>
                    </div>
                   <p className="p-5">If you do not have an account please <Link to='/register' className="text-blue-400">create a Account</Link></p>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default LogIn;