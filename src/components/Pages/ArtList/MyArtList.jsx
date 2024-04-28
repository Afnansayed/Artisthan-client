import { useContext } from "react";
import { AuthContext } from "../../../Providers/Provider";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyArtList = ({ design,arts,setArts }) => {
    const {user} = useContext(AuthContext);
    const {_id,image, item_name,  price, rating, customization,  stockStatus, userEmail, userName} = design;

    const handleDelete = _id => {
             console.log(_id)
          // Delete
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/allArt/${_id}`,{
                    method:'DELETE'
                })
                .then(res=> res.json())
                .then(data => {
                    console.log(data)
                    if(data.deletedCount === 1){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                          //
                          const remainingArts = arts.filter(art => art._id !== _id);
                          setArts(remainingArts)
                    }
                })
              
            }
          });

          

    }
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
                        <span className="text-base font-semibold"> Rating : {rating}</span>
                    </p>
                    <p className="text-sm">
                        <span className="text-base font-semibold"> Customization : {customization}</span> 
                    </p>
                    <p className="text-sm">
                        <span className="text-base font-semibold"> Stock : {stockStatus}</span> 
                    </p>
                </div>
                <div className="flex justify-around mt-5 ">
                 <Link to={`/update/${_id}`}>
                 <button type="button" className="px-8 py-3 font-semibold border rounded dark:border-gray-800 dark:text-gray-800 hover:bg-sky-300">Update</button>
                 </Link>   
                
                <button onClick={()=>handleDelete(_id)} type="button" className="px-8 py-3 font-semibold border rounded dark:border-gray-800 dark:text-gray-800 hover:bg-sky-300">Delete</button>
                </div>
            </div>
        </div>
    );
};
MyArtList.propTypes ={
    design:PropTypes.object,
    arts:PropTypes.array,
    setArts:PropTypes.func
}
export default MyArtList;