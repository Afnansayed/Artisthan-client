import { Link, useLoaderData } from "react-router-dom";


const Details = () => {
    const data = useLoaderData();
    // console.log(data)
    const { _id, image, item_name, subcategory_Name, shortDescription, price, rating, customization, processing_time, stockStatus, userEmail, userName } = data;
    return (
        <section>
            <div className="dark:bg-violet-600">
                <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-50">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-50">{item_name}</h1>
                    <h1 className="text-2xl mt-3 font-bold leading-none sm:text-2xl xl:max-w-2xl dark:text-gray-50">{subcategory_Name}</h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50">{shortDescription}</p>
                    <div className="space-y-5">
                        <div className="flex gap-5 md:gap-24  items-center">
                            <p className="font-semibold text-xl lg:text-3xl">Price: {price} <span className="text-green-400 font-bold text-xl">$</span></p>
                            <p className="font-semibold text-xl lg:text-3xl">Rating : {rating} </p>
                        </div>
                        <div className="flex gap-5 md:gap-24  items-center">
                            <p className="font-semibold lg:text-3xl text-xl">Price: {customization} <span className="text-green-400 font-bold text-xl">$</span></p>
                            <p className="font-semibold text-xl lg:text-3xl">Rating : {processing_time} </p>
                        </div>
                        <p className="text-xl md:text-3xl font-semibold">Stock : {stockStatus}</p>
                    </div>
                    <div className="bg-red-200 shadow-sl p-2 md:p-8 lg:p-12 mt-6 rounded-lg ">
                            <p className="text-2xl"><span className="font-bold">Artist :</span> {userName}</p>
                            <p className="text-2xl"><span className="font-bold">Email :</span> {userEmail}</p>
                            </div>
                    <div className="flex flex-wrap justify-center mt-5">
                        <Link to='/'>
                            <button type="button" className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-300 dark:text-gray-50 hover:bg-sky-500">Home</button>
                        </Link>
                    </div>
                </div>
            </div>
            <img src={image} alt="" className="w-5/6 mx-auto mb-12 -mt-20 dark:bg-gray-500 rounded-lg shadow-md lg:-mt-40" />
        </section>
    );
};

export default Details;