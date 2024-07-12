"use client"
import React, { useEffect, useState } from "react";
import ContentTypeForm from "@/components/admin/content-type/ContentTypeForm";
import BreadcrumbCustom from "@/components/global/BreadcrumbCustom";
import { apiCallGetContentType } from "@/services/api-service-content-type";
import { ContentType } from "@/types";
import { toast } from "@/components/ui/use-toast";
import Spinner from "@/components/global/Spinner";

const Page = ({ params }: { params: { id: string } }) => {
    const [contentType, setContentType] = useState<ContentType | undefined>(undefined);
    const [loading, setLoading] = useState(true);
    const breadcrumbLinks = [{ href: "/admin", label: "Dashboard" }, { href: "/admin/content-type", label: "Content Type" }];
    const currentPageName: string = "Update Content Type";
    const id = params.id;

    useEffect(() => {
        const fetchData = async () => {
            if (id != null) {
                console.log("Send request to server with id = " + id);
                await apiCallGetContentType(id)
                    .then(response => {
                        setContentType(response.data.data);
                    })
                    .catch(error => {
                        toast({
                            title: "Error", description: error.response.data.message, variant: "destructive"
                        });
                    });
            }
        };

        fetchData()
            .finally(() => setLoading(false));
    }, [id]);

    return (
        <>
            <div className="mb-8">
                <BreadcrumbCustom links={breadcrumbLinks} currentPageName={currentPageName} />
            </div>
            <div className="flex items-center justify-center h-full">
                {loading ? (<Spinner />) : (<ContentTypeForm contentType={contentType} />)}
            </div>
        </>
    );
}

export default Page;
