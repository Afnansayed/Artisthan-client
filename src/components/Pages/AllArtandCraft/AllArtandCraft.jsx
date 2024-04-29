import { Link, useLoaderData } from "react-router-dom";

const AllArtandCraft = () => {
    const data = useLoaderData();

    return (
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
            <h2 className="mb-4 text-2xl font-semibold leading-tight">All Arts</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full text-xs lg:text-xl">
                    <thead className="dark:bg-gray-300">
                        <tr className="text-left ">
                            <th className="p-3">No:</th>
                            <th className="p-3">Subcategory Name</th>
                            <th className="p-3">Artist Name</th>
                            {/* <th className="p-3">Rating</th> */}
                            <th className="p-3 text-right">Price</th>
                            <th className="p-3 text-right">Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((art, idx) => (
                            <tr key={idx} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                <td className="p-3">{idx + 1}</td>
                                <td className="p-3">{art.subcategory_Name}</td>
                                <td className="p-3">{art.userName}</td>
                                {/* <td className="p-3">{art.rating}</td> */}
                                <td className="p-3 text-right">${art.price}</td>
                                <td className="p-3 text-right">
                                    <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                                        <Link to={`/${art._id}`}>View</Link>
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllArtandCraft;
