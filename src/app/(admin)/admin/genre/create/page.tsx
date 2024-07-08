import React from "react";
import GenreForm from "@/components/admin/genre/GenreForm";
import BreadcrumbCustom from "@/components/global/BreadcrumbCustom";

const Page: React.FC = () => {
    const breadcrumbLinks = [{href: "/admin", label: "Dashboard"}, {href: "/admin/genre", label: "Genre"}];
    const currentPageName = "Create Genre";
    return (<>
            <div className="mb-8"><BreadcrumbCustom links={breadcrumbLinks} currentPageName={currentPageName}/></div>
            <div className="flex items-center justify-center h-full">
                <GenreForm/>
            </div>
        </>

    )
}

export default Page;
