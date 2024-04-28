import { Link } from "react-router-dom";
import PropTypes from 'prop-types'


const CraftMap = ({ art }) => {
    const { _id,image, item_name, subcategory_Name, shortDescription, price, rating } = art;
    return (
        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 mx-auto">
            <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">{item_name}</h2>
                    <h2 className="text-xl font-semibold tracking-wide">{subcategory_Name}</h2>

                    <p className="dark:text-gray-800">{shortDescription}</p>
                </div>
                <div className="flex gap-5  items-center">
                    <p className="font-semibold">Price: {price} <span className="text-green-400 font-bold text-xl">$</span></p>
                    <p className="font-semibold">Rating : {rating} </p>
                </div>
                <Link to={`/${_id}`}>
                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 hover:bg-sky-500 dark:text-gray-50">View Details</button>
                </Link>
            </div>
        </div>
    );
};
CraftMap.propTypes={
    art:PropTypes.object
}
export default CraftMap;