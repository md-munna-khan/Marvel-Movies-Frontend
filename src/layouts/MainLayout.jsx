import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AuthContext } from "./AuthProvider";
import { useContext } from "react";


const MainLayout = () => {
    const {isdark}=useContext(AuthContext)
    return (
        <div className={`w-11/12 mx-auto my-4 ${isdark? 'bg-black text-white': '' }`}>
         <nav>
<Navbar></Navbar>
         </nav>
         <main>
            <Outlet></Outlet>
         </main>
         <Footer></Footer>
        </div>
    );
};

export default MainLayout;