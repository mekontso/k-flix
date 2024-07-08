import React from "react";
import Sidebar from "@/components/admin/Sidebar";
import NavBar from "@/components/admin/NavBar";

const AdminLayout = ({children}: { children: React.ReactNode }) => {
    return <>
        <NavBar/>
        <div className="flex">
            <div className="hidden md:block h-[100vh]">
                <Sidebar/>
            </div>
            <div className="container p-5 w-full md:max-w-[1140px]">{children}</div>

        </div>
    </>
}


export default AdminLayout;
