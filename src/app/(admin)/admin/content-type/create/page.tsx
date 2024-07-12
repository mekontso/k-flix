import React from "react";
import BreadcrumbCustom from "@/components/global/BreadcrumbCustom";
import ContentTypeForm from "@/components/admin/content-type/ContentTypeForm";

const Page: React.FC = () => {
    const breadcrumbLinks = [{href: "/admin", label: "Dashboard"}, {
        href: "/admin/content-type",
        label: "Content type"
    }];
    const currentPageName = "Create Content Type";
    return (<>
            <div className="mb-8"><BreadcrumbCustom links={breadcrumbLinks} currentPageName={currentPageName}/></div>
            <div className="flex items-center justify-center h-full">
                <ContentTypeForm/>
            </div>
        </>

    )
}

export default Page;
