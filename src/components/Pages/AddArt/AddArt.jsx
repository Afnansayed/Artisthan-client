import { useContext } from "react";
import { AuthContext } from "../../../Providers/Provider";
import Swal from "sweetalert2";


const AddArt = () => {
    const {user} = useContext(AuthContext);

    const handleAdd = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
       const image = form.get('image');
       const item_name = form.get('item_name');
       const subcategory_Name = form.get('subcategory_Name');
       const shortDescription = form.get('shortDescription');
       const price = form.get('price');
       const rating = form.get('rating');
       const customization = form.get('customization');
       const processing_time = form.get('processing_time');
       const stockStatus = form.get('stockStatus');
       const userEmail = form.get('userEmail');
       const userName = form.get('userName');
       const art = {image,item_name,subcategory_Name,shortDescription,price,rating,customization,processing_time,stockStatus,userEmail,userName}
       //console.log(art)

       console.log(art);
       fetch('https://assignment-ten-server-rouge.vercel.app/allArt',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(art)
       })
       .then(res => res.json())
       .then(data => {
        console.log(data)
        //sweet alert
        Swal.fire({
            position: "middle",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
       })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="w-full lg:w-[70%]">
                <div className="card shrink-0 w-full  shadow-2xl bg-red-100">
                    <form onSubmit={handleAdd} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="text" placeholder="Image.jpg" className="input input-bordered" name="image" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Item-Name</span>
                            </label>
                            <input type="text" placeholder="Item-Name" className="input input-bordered" name="item_name" required />
                        </div>
                        {/* 3 */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Subcategory Name</span>
                            </label>
                            <input type="text" placeholder="subcategory_Name" className="input input-bordered" name="subcategory_Name" required />
                        </div>
                        {/* 4*/}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <input type="text" placeholder="Short Description" className="input input-bordered" name="shortDescription" required />
                        </div>
                        {/* 5 */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" placeholder="Price" className="input input-bordered" name="price" required />
                        </div>
                        {/* 6 */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating
                                </span>
                            </label>
                            <input type="text" placeholder="Rating" className="input input-bordered" name="rating" required />
                        </div>
                        {/* 7 */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Customization
                                </span>
                            </label>
                            <input type="text" placeholder="Customization" className="input input-bordered" name="customization" required />
                        </div>
                        {/* 8 */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Processing_time
                                </span>
                            </label>
                            <input type="text" placeholder=" Processing_time" className="input input-bordered" name="processing_time" required />
                        </div>
                        {/* 9 */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">StockStatus
                                </span>
                            </label>
                            <input type="text" placeholder="StockStatus" className="input input-bordered" name="stockStatus" required />
                        </div>
                        {/* 10 */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Email
                                </span>
                            </label>
                            <input type="text" placeholder="User Email" className="input input-bordered" defaultValue={user.email} name="userEmail" required />
                        </div>
                        {/* 11 */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name
                                </span>
                            </label>
                            <input type="text" placeholder="User Name" className="input input-bordered" defaultValue={user.displayName} name="userName" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">ADD</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddArt;