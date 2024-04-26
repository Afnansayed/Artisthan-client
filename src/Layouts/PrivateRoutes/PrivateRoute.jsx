import { useContext } from "react";
import { AuthContext } from "../../Providers/Provider";
import {  CirclesWithBar } from 'react-loader-spinner'
import { Navigate, useLocation } from "react-router-dom";
import PropType from 'prop-types'

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    //console.log(location)

    if (loading) {
        return (
            <div className="flex justify-center h-screen">
                <CirclesWithBar
                    height="100"
                    width="80"
                    color="#4fa94d"
                    outerCircleColor="#4fa94d"
                    innerCircleColor="#4fa94d"
                    barColor="#4fa94d"
                    ariaLabel="circles-with-bar-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>
        )
    }

    if (user) {
        return children;
    }
    return (
        <Navigate state={location?.pathname} to='/logIn'></Navigate>
    );
};
PrivateRoute.propTypes={
    children:PropType.node
}
export default PrivateRoute;