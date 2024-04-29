import { useEffect, useState } from "react";
import CraftMap from "./CraftMap";


const CraftItems = () => {
    const [allArt,setAllArt] = useState([]);
    const [showAll,setShowAll] = useState(false);
    useEffect(()=> {
           fetch('https://assignment-ten-server-rouge.vercel.app/allArt')
           .then(res => res.json())
           .then(data => setAllArt(data))
    },[])
   // console.log(allArt)
    const handleShow = ()  => {
              setShowAll(!showAll)
              console.log(showAll)
    }

    return (
        <div>
             <div className="rounded-xl mb-6 p-3">
                  <h2 className="text-sm lg:text-3xl font-semibold w-1/2 text-center mx-auto">Immerse Yourself in a World of Artistic Wonder: Explore Diverse Creations from Talented Artisans Around the Globe</h2> 
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {showAll ?
                  allArt.map(art => <CraftMap
                  key={art._id}
                  art={art}
                  ></CraftMap>)
                : allArt.slice(0,9).map(art => <CraftMap
                    key={art._id}
                    art={art}
                    ></CraftMap>) 
            }
                
             </div>
             {
                showAll ? '': <div className="flex justify-center mt-7 ">
                <button onClick={handleShow} className="btn shadow-xl bg-blue-800 text-[#ffffff] hover:bg-sky-500">Show All</button>
             </div>
             }
        </div>
    );
};

export default CraftItems;