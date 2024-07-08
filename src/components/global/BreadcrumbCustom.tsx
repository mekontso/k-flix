import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";

type BreadcrumbProps = {
    links: { href: string; label: string }[];
    currentPageName: string;
};


const BreadcrumbCustom : React.FC<BreadcrumbProps>= ({links, currentPageName}) => {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                {links?.map((link, index) => (
                    <React.Fragment key={index}>
                        <BreadcrumbItem>
                            <BreadcrumbLink href={link.href}>{link.label}</BreadcrumbLink>
                        </BreadcrumbItem>
                        {index < links.length - 1 && <BreadcrumbSeparator />}
                    </React.Fragment>
                ))}
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>{currentPageName}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    );
};

export default BreadcrumbCustom;
