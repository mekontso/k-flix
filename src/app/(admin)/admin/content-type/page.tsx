"use client"
import React, {useEffect, useState} from "react";
import BreadcrumbCustom from "@/components/global/BreadcrumbCustom";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Plus} from "lucide-react";
import {ContentType} from "@/types";
import {apiCallGetAllContentType} from "@/services/api-service-content-type";
import DataTable from "@/components/global/DataTable";
import dataTableColumnsContentType from "@/components/admin/content-type/DataTableColumns";
import {useRouter} from "next/navigation";

const Page: React.FC = () => {
    const router = useRouter();
    const [contentTypeList, setContentTypeList] = useState<ContentType[]>([])
    const breadcrumbLinks = [{ href: "/admin", label: "Dashboard" }];
    const currentPageName = "Content type";

    useEffect(() => {
        const fetchData = async () => {
            await apiCallGetAllContentType()
                .then(response => {
                    setContentTypeList(response.data.data.content);
                })
                .catch(error => {
                    console.log(error);
                })
        }
        fetchData()
    }, []);


    return (<div>
        <div className="mb-8"><BreadcrumbCustom links={breadcrumbLinks} currentPageName={currentPageName}/></div>
        <div className="flex justify-between">
            <h1>Genre</h1>
            <Button>
                <Link href="/admin/content-type/create" className="flex items-center">
                    <Plus/>
                    <span className="ml-2">New</span>
                </Link>
            </Button>
        </div>
        <div className="py-8">
            <DataTable columns={dataTableColumnsContentType(router)} data={contentTypeList}/>
        </div>
    </div>)
}

export default Page;
