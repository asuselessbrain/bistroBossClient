import { Outlet } from "react-router-dom";
import NavBar from "../pages/shared/navBar/NavBar";
import Footer from "../pages/shared/footer/Footer";

const MainLayout = () => {
    return (
        <div className="max-w-[1440px] mx-auto">
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;