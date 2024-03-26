import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Headers from "../Headers/Headers";


const Root = () => {
    return (
        <div>
            <Headers></Headers>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;