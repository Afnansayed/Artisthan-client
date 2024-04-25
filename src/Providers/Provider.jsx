import { createContext, useState} from "react";
import PropTypes from 'prop-types'
export const AuthContext = createContext(null);
const Provider = ({children}) => {
    const [user,setUser] = useState(null);

    const authInfo = {user,name: 'Razin'}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};
Provider.propTypes={
    children:PropTypes.node
}
export default Provider;