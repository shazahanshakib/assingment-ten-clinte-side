import { ToastContainer } from "react-toastify";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";


const Root = () => {

 
    
    return (
        <div>
            <Navbar></Navbar>
            <Outlet />
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;