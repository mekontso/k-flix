import React from "react";
import Breadcrumb from "@/components/global/BreadcrumbCustom";
import BreadcrumbCustom from "@/components/global/BreadcrumbCustom";

const AdminPage: React.FC = () => {
    const breadcrumbLinks = [{ href: "/admin", label: "" }];
    const currentPageName = "Dashboard";

    return (<>
        <div className="mb-8"><BreadcrumbCustom links={breadcrumbLinks} currentPageName={currentPageName} /></div>
        Admin page
    </>)
}

export default AdminPage;
