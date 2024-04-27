import { useContext } from "react";
import { AuthContext } from "../../../Providers/Provider";
import { useLoaderData } from "react-router-dom";


const Artlist = () => {
    const {user} = useContext(AuthContext);
    const allArts = useLoaderData();
    console.log(allArts)
    const userArts = allArts.filter(arts => arts.userEmail === user.email)
    console.log(userArts)
    

    return (
        <div>
             <h2 className="text-center text-red-600">My art and craft List</h2>
        </div>
    );
};

export default Artlist;