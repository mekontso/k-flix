"use client"
import React, {useEffect} from "react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Plus} from "lucide-react";
import BreadcrumbCustom from "@/components/global/BreadcrumbCustom";
import {Genre} from "@/types";
import {getAllGenre} from "@/services/api-service-genre";
import DataTable from "@/components/global/DataTable";
import dataTableColumnsGenre from "@/components/admin/genre/DataTableColumns";


const Page: React.FC = () => {
    const [genreList, setGenreList] = React.useState<Genre[]>([]);
    const breadcrumbLinks = [{ href: "/admin", label: "Dashboard" }];
    const currentPageName = "Genre";


    useEffect(() => {
        const fetchData = async () => {
            await getAllGenre()
                .then(response => {
                    setGenreList(response.data.data.content);
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
                <Link href="/admin/genre/create" className="flex items-center">
                    <Plus/>
                    <span className="ml-2">New</span>
                </Link>
            </Button>
        </div>
        <div className="py-8">
            <DataTable columns={dataTableColumnsGenre} data={genreList} />
        </div>
    </div>)
}

export default Page;
