import { useEffect, useState } from "react";
import CraftMap from "./CraftMap";


const CraftItems = () => {
    const [allArt,setAllArt] = useState([]);
    useEffect(()=> {
           fetch('http://localhost:5000/allArt')
           .then(res => res.json())
           .then(data => setAllArt(data))
    },[])
    console.log(allArt)
    return (
        <div>
             <div>
                {/* <h2 className="text-3xl font-bold">{allArt.length}</h2> */}
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                  allArt.map(art => <CraftMap
                  key={art._id}
                  art={art}
                  ></CraftMap>)
                }
             </div>
        </div>
    );
};

export default CraftItems;