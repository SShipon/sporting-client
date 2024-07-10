import Footer from "@/pages/shared/Footer";
import Navbar from "@/pages/shared/Navbar";

import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow p-4"> {/* Adjust padding as needed */}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default MainLayout;
