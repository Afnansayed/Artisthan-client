import Coures from "../../Coures/Coures";
import CraftItems from "../../CraftItems/CraftItems";
import Footer from "../../Footer/Footer";
import Gallery from "../../Gallery/Gallery";
import Slider from "../../Slider/Slider";


const Home = () => {
    return (
        <div>
             <div className="mt-12">
                <Slider/>
             </div>
             <div className="mt-12">
                <CraftItems/>
             </div>
             <div className="mt-12">
                <Coures/>
             </div>
             <div className="mt-12">
                <Gallery/>
             </div>
             <div className="mt-12">
                <Footer/>
             </div>
        </div>
    );
};

export default Home;