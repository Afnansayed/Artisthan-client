import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {
    const data = useLoaderData()
    const {_id,image,item_name,subcategory_Name,shortDescription,price,rating,customization,processing_time,stockStatus} = data;

    ///
    const handleUpdate = e => {
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
       const art = {image,item_name,subcategory_Name,shortDescription,price,rating,customization,processing_time,stockStatus}
       console.log(art)

       //update data 
       fetch(`http://localhost:5000/allArt/${_id}`,{
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(art)
       })
       .then(res => res.json())
       .then(data => {
        console.log(data)
        if(data.modifiedCount > 0){
            Swal.fire({
                position: "middle",
                icon: "success",
                title: "Update successfully !",
                showConfirmButton: false,
                timer: 1500
              });
        }
       })
     

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="w-full lg:w-[70%] mt-12">
                <div className="card shrink-0 w-full  shadow-2xl bg-yellow-700">
                    <form onSubmit={handleUpdate} className="card-body grid grid-cols-1 md:grid-cols-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Image</span>
                            </label>
                            <input type="text" placeholder="Image.jpg" className="input input-bordered font-bold" name="image" defaultValue={image}  />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Item-Name</span>
                            </label>
                            <input type="text" placeholder="Item-Name" className="input input-bordered font-bold" name="item_name" defaultValue={item_name} />
                        </div>
                        {/* 3 */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Subcategory Name</span>
                            </label>
                            <input type="text" placeholder="subcategory_Name" className="input input-bordered font-bold" name="subcategory_Name"  defaultValue={subcategory_Name} />
                        </div>
                        {/* 4*/}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Short Description</span>
                            </label>
                            <input type="text" placeholder="Short Description" className="input input-bordered font-bold" name="shortDescription" defaultValue={shortDescription} />
                        </div>
                        {/* 5 */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Price</span>
                            </label>
                            <input type="text" placeholder="Price" className="input input-bordered font-bold" name="price" defaultValue={price} />
                        </div>
                        {/* 6 */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Rating
                                </span>
                            </label>
                            <input type="text" placeholder="Rating" className="input input-bordered font-bold" name="rating" defaultValue={rating} />
                        </div>
                        {/* 7 */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Customization
                                </span>
                            </label>
                            <input type="text" placeholder="Customization" className="input input-bordered font-bold" name="customization" defaultValue={customization}  />
                        </div>
                        {/* 8 */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold"> Processing_time
                                </span>
                            </label>
                            <input type="text" placeholder=" Processing_time" className="input input-bordered font-bold" name="processing_time" defaultValue={processing_time} />
                        </div>
                        {/* 9 */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">StockStatus
                                </span>
                            </label>
                            <input type="text" placeholder="StockStatus" className="input input-bordered font-bold" name="stockStatus" defaultValue={stockStatus} />
                        </div>
                                             
                        <div className="form-control mt-6 lg:col-span-2">
                            <button className="btn bg-gray-300 hover:bg-sky-200">ADD</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Update;