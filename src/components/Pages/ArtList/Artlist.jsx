import { useContext } from "react";
import { AuthContext } from "../../../Providers/Provider";
import { useLoaderData } from "react-router-dom";
import MyArtList from "./MyArtList";


const Artlist = () => {
    const {user} = useContext(AuthContext);
    const allArts = useLoaderData();
    console.log(allArts)
    const userArts = allArts.filter(arts => arts.userEmail === user.email)
   // console.log(userArts)
    

    return (
        <div>
            <div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-[80%] mx-auto gap-8">
                {
                    userArts.map(design => <MyArtList 
                      key={design._id}
                      design={design}
                    ></MyArtList>)
                }
            </div>
        </div>
    );
};

export default Artlist;