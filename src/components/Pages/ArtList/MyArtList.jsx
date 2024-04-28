import { useContext } from "react";
import { AuthContext } from "../../../Providers/Provider";


const MyArtList = ({ design }) => {
    const {user} = useContext(AuthContext)
    const {image, item_name, subcategory_Name, shortDescription, price, rating, customization, processing_time, stockStatus, userEmail, userName} = design;
    return (
        <div className="rounded-md shadow-md sm:w-96 lg:w-[500px] dark:bg-gray-50 dark:text-gray-800">
            <div className="flex items-center justify-between p-3">
                <div className="flex items-center space-x-2">
                    <img src={user?.photoURL} alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-300" />
                    <div className="-space-y-1">
                        <h2 className="text-sm font-semibold leading-none">{userName}</h2>
                        <span className="inline-block text-xs leading-none dark:text-gray-600">{userEmail}</span>
                    </div>
                </div>
                
            </div>
            <img src={image} alt="" className="object-cover object-center w-full h-72 dark:bg-gray-500" />
            <div className="p-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        
                    </div>
                    <button type="button" title="Bookmark post" className="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                            <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
                        </svg>
                    </button>
                </div>
                <div className="space-y-3">
                    <p className="text-sm">
                        <span className="text-base font-semibold">{item_name}</span> 
                    </p>
                    <p className="text-sm">
                        <span className="text-base font-semibold"> Price : {price}</span> $ 
                    </p>
                    <p className="text-sm">
                        <span className="text-base font-semibold"> Customization : {customization}</span> 
                    </p>
                    <p className="text-sm">
                        <span className="text-base font-semibold"> Stock : {stockStatus}</span> 
                    </p>
                </div>
                <div className="flex justify-around mt-5 ">
                <button type="button" className="px-8 py-3 font-semibold border rounded dark:border-gray-800 dark:text-gray-800 hover:bg-sky-300">Update</button>
                <button type="button" className="px-8 py-3 font-semibold border rounded dark:border-gray-800 dark:text-gray-800 hover:bg-sky-300">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyArtList;