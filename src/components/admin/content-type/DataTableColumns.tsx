"use client";
import { ColumnDef } from "@tanstack/react-table";
import { ContentType } from "@/types";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { FaPen, FaTrashCan } from "react-icons/fa6";
import React from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const dataTableColumnsContentType = (router: AppRouterInstance): ColumnDef<ContentType>[] => [
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
            const contentType = row.original;

            const updateItem = (contentType: ContentType): void => {
                router.push(`/admin/content-type/update/${contentType.id}`);
            };

            const deleteItem = (contentType: ContentType): void => {
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
                        <DropdownMenuItem onClick={() => updateItem(contentType)}>
                            <FaPen />
                            <span className="ml-4">Update</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => deleteItem(contentType)}>
                            <FaTrashCan className="fill-red-600" />
                            <span className="ml-4">Delete</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];

export default dataTableColumnsContentType;
