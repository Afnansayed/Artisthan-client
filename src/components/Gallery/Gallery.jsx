import { useEffect, useState } from "react";


const Gallery = () => {
    const [arts, setArts] = useState([])
    useEffect(() => {
        fetch('https://assignment-ten-server-rouge.vercel.app/allArt')
            .then(res => res.json())
            .then(data => setArts(data))
    }, [])
    //console.log(arts)
    return (
        <section className="py-6 dark:bg-gray-100">
            <div>
                <h3 className="text-4xl font-semibold uppercase text-center mb-7">Art Gallery</h3>
            </div>
            <div className="container flex flex-col justify-center p-4 mx-auto">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">

                    {
                        arts.slice(0, 8).map(imge => <img key={imge._id} className="object-cover w-full dark:bg-gray-500 aspect-square" src={imge?.image} />)
                    }


                </div>
            </div>
        </section>
    );
};

export default Gallery;