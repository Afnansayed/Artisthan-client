import { Link } from 'react-router-dom';
import bacBg from '../../assets/404.jpg'

const Error = () => {
    return (
        <div className="hero min-h-screen bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${bacBg})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <Link to='/'>
                <button className="btn px-12 bg-blue-700 hover:bg-sky-500 text-[#ffff]">Home</button>
                </Link>
                  
                </div>
            </div>
        </div>
    );
};

export default Error;