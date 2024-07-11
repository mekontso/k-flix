import {ColumnDef} from "@tanstack/react-table";
import {Genre} from "@/types";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {MoreHorizontal} from "lucide-react";
import {FaPen, FaTrashCan} from "react-icons/fa6";
import React from "react";

const dataTableColumnsGenre: ColumnDef<Genre>[] = [{
    accessorKey: "id", header: "Id"
}, {
    accessorKey: "name", header: "Name"
}, {
    id: "actions", header: "Actions", cell: ({row}) => {
        const category = row.original;

        return (<DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w8- p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-6 w-6"/>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                        <FaPen></FaPen>
                        <span className="ml-4">Update</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <FaTrashCan className="fill-red-600"></FaTrashCan>
                        <span className="ml-4">Delete</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>);
    },
},]

export default dataTableColumnsGenre;
