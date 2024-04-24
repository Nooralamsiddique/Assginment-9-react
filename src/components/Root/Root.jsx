import { Outlet } from "react-router-dom";
import Navber from "../Naveber/Navber";
import Footer from "../Footer/Footer";


const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;