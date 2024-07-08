import React from "react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Plus} from "lucide-react";

const Page: React.FC = () => {
    return (<div>
        <div className="flex justify-between">
            <h1>Genre</h1>
            <Button >
                <Link href="/admin/genre/create" className="flex items-center">
                    <Plus/>
                    <span className="ml-2">New</span>
                </Link>
            </Button>
        </div>
        <div>Data table here</div>
    </div>)
}

export default Page;
