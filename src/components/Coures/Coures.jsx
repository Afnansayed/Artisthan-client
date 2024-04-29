import backgroundImage from '../../assets/5227019.jpg';

const Coures = () => {
    return (
        <div className='bg-cover bg-no-repeat bg-left lg:bg-center w-full lg:p-12 flex justify-end rounded-sm' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <form className="lg:w-[30%] rounded-lg lg:bg-gray-200 space-y-3 lg:space-y-5 p-2 lg:p-12 shadow-xl">
                <div className="form-control">

                    <input type="text" placeholder="Name" className="input input-bordered" required />
                </div>
                <div className="form-control">

                    <input type="number" placeholder="Number" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <button className="btn bg-blue-700 text-[#ffff] hover:bg-sky-500">Perches</button>
                </div>
            </form>
        </div>
    );
};

export default Coures;