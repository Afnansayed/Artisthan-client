import CraftItems from "../../CraftItems/CraftItems";
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
        </div>
    );
};

export default Home;