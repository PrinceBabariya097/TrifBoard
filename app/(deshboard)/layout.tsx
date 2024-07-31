import React from "react";
import Sidebar from "./_components/sidebar";
import OrgSidebar from "./_components/OrgSidebar";
import Navbar from "./_components/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-screen">
      <Sidebar />
      <div className="ml-[60px] h-screen">
        <div className="flex">
            <OrgSidebar />
            <div className="h-screen flex-1">
                <Navbar />
                {children}
            </div>
        </div>
        </div>
    </main>
  );
};

export default Layout;
