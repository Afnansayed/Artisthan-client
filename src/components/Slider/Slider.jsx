import banner1 from '../../assets/banner1.jpg'
import banner2 from '../../assets/banner2.jpg'
import banner3 from '../../assets/banner3.jpg'
import banner4 from '../../assets/banner4.jpg'

const Slider = () => {
    return (
        <div className="carousel w-full  max-h-58 lg:h-72 rounded-sm ">
            <div id="slide1" className="carousel-item relative w-full bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${banner1})` }} >
            <div className='space-y-3 mt-12'>
                   <h2 className=" text-4xl font-bold text-red-100 text-center">Embark on an Artistic Odyssey: Explore a World of Creativity Beyond Imagination</h2>
                   <p className='font-medium text-gray-100 text-center w-3/4 mx-auto '>Indulge in a captivating journey through a realm where creativity knows no bounds. Discover an eclectic collection of unique artworks crafted by talented artists from around the globe. Unleash your imagination and bring beauty into your life with every brushstroke.</p>
            </div> 
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>

            </div>
            <div id="slide2" className="carousel-item relative w-full bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${banner2})` }} >
            <div className='space-y-3 mt-12'>
                   <h2 className=" text-4xl font-bold text-red-100 text-center">Dive Into the Artisan,s Universe: Embrace the Beauty of Handcrafted Creations</h2>
                   <p className='font-medium text-gray-100 w-3/4 mx-auto '>Immerse yourself in the enchanting world of handmade treasures that tell stories of passion and craftsmanship. From intricate sculptures to elegant jewelry, each piece celebrates the artistry of human hands. Elevate your surroundings with creations that inspire and enchant.</p>
            </div> 
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>

            </div>
            <div id="slide3" className="carousel-item relative w-full bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${banner3})` }} >
            <div className='space-y-3 mt-12'>
                   <h2 className=" text-4xl font-bold text-red-300 text-center">Wander Through a Tapestry of Inspiration: Journey Through a Canvas of Dreams and Emotions</h2>
                   <p className='font-medium text-black w-3/4 text-center mx-auto '>Embark on a visual odyssey through a gallery of inspiration. Our diverse collection of paintings captures the essence of emotions, landscapes, and dreams. Let each stroke of color ignite your imagination and transport you to new realms of wonder and contemplation</p>
            </div> 
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>

            </div>
            <div id="slide4" className="carousel-item relative w-full bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${banner4})` }} >
            <div className='space-y-3 mt-12'>
                   <h2 className=" text-4xl font-bold text-black text-center">Enrich Your Surroundings with Timeless Elegance: Elevate Your Space with Sophisticated Artistry</h2>
                   <p className='font-medium text-black w-3/4 mx-auto '>Transform your living space into a sanctuary of artistic expression. Our carefully curated artworks offer a blend of tradition and innovation, adding character and sophistication to any room. Immerse yourself in a world of beauty and make your home a masterpiece of elegance and refinement</p>
            </div> 
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>

            </div>
        </div>
    );
};

export default Slider;