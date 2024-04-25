import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";


const Main = () => {
    return (
        <div>
            <div className="container mx-auto">
                <NavBar></NavBar>
            </div>
           <Outlet></Outlet> 
        </div>
    );
};

export default Main;