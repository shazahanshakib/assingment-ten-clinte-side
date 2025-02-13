import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    
    const {user, loading}= useContext(AuthContext)

    if (loading) {
        return <span className="loading loading-bars loading-md text-center"></span>
      }

    if (user == null) {
        return <Navigate to='/singin'></Navigate>
    }
    return children
};

export default PrivateRoute;