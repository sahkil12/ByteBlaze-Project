import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Root = () => {
    return (
        <div>
           <div className="sticky z-50 top-0 ">
             <Navbar></Navbar>
           </div>
           <div className="min-h-[calc(100vh-180px)]">
             <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;