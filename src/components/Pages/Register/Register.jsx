import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className=" w-[70%]">
                <div className=" card shrink-0  shadow-2xl bg-base-100 ">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="email" placeholder="Enter Your Name" className="input input-bordered" name="name" required />
                        </div>
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
                            <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="email" placeholder="photo url" className="input input-bordered" name="photo" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-blue-700 hover:bg-sky-500 text-[#ffffff]">Login</button>
                        </div>
                    </form>
                    <p className="pb-5 text-center">If you  have an account please <Link to='/login' className="text-blue-400">Log In</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;