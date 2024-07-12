"use client"
import React, {useEffect, useState} from "react";
import GenreForm from "@/components/admin/genre/GenreForm";
import BreadcrumbCustom from "@/components/global/BreadcrumbCustom";
import {getGenre} from "@/services/api-service-genre";
import {Genre} from "@/types";
import {toast} from "@/components/ui/use-toast";
import Spinner from "@/components/global/Spinner";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

const Page = ({params}: { params: { id: string } }) => {
    const [genre, setGenre] = useState<Genre | undefined>(undefined);
    const [loading, setLoading] = useState(true);
    const breadcrumbLinks = [{href: "/admin", label: "Dashboard"}, {href: "/admin/genre", label: "Genre"}];
    const currentPageName: string = "Update Genre";
    const id = params.id

    useEffect(() => {
        const fetchData = async () => {
            if (id != null) {
                console.log("Send request to server with id = " + id);
                await getGenre(id)
                    .then(response => {
                        setGenre(response.data.data);
                    })
                    .catch(error => {
                        toast({
                            title: "Error", description: error.response.data.message,variant: "destructive"
                        });
                    });
            }
        };

        fetchData()
            .finally(() => setLoading(false));
    }, [id]);

    return (<>
            <div className="mb-8">
                <BreadcrumbCustom links={breadcrumbLinks} currentPageName={currentPageName}/>
            </div>
            <div className="flex items-center justify-center h-full">
                {loading ? (<Spinner/>) : (<GenreForm genre={genre}/>)}
            </div>
        </>);
}

export default Page;
