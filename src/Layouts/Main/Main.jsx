import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";


const Main = () => {
    return (
        <div className="container mx-auto p-4">
            <div>
                <NavBar></NavBar>
            </div>
           <Outlet></Outlet> 
        </div>
    );
};

export default Main;