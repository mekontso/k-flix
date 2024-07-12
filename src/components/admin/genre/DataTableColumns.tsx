"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Genre } from "@/types";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { FaPen, FaTrashCan } from "react-icons/fa6";
import React from "react";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

const dataTableColumnsGenre = (router: AppRouterInstance): ColumnDef<Genre>[] => [
    {
        accessorKey: "id",
        header: "Id",
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
            const genre = row.original;

            const updateItem = (genre: Genre): void => {
                router.push(`/admin/genre/update/${genre.id}`);
            };

            const deleteItem = (genre: Genre): void => {
                console.log("delete selected");
            };

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-6 w-6" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => updateItem(genre)}>
                            <FaPen />
                            <span className="ml-4">Update</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => deleteItem(genre)}>
                            <FaTrashCan className="fill-red-600" />
                            <span className="ml-4">Delete</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];

export default dataTableColumnsGenre;
