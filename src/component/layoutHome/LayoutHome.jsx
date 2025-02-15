// import { useContext } from "react";
import AiVisa from "../aiVisa/AiVisa";
import Home from "../home/Home";
import LatestViseSec from "../latestVisa/LatestViseSec";
import ScanVisa from "../scanVisa/ScanVisa";
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
            <AiVisa></AiVisa>
            <ScanVisa></ScanVisa>
        </div>
    );
};

export default LayoutHome;