// import { useContext } from "react";
import Home from "../home/Home";
import LatestViseSec from "../latestVisa/LatestViseSec";
// import { AuthContext } from "../authProvider/AuthProvider";

const LayoutHome = () => {
    // const {loading}= useContext(AuthContext)

    // if (loading) {
    //     return <span className="loading loading-bars loading-md text-center"></span>
    //   }

    return (
        <div>
            <Home></Home>
            <LatestViseSec></LatestViseSec>
        </div>
    );
};

export default LayoutHome;