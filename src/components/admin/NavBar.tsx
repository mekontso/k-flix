import React from "react";
import Link from "next/link";
import logo from "@/assets/logo1.png"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import ThemeToggler from "@/components/admin/ThemeToggler";
import Image from "next/image";

const NavBar: React.FC = () => {
    return (<div className="bg-primary dark:bg-slate-700 py-2 px-5 flex justify-between text-white">
        <div className="container flex justify-between">
            <Link href="/">
                <Image src={logo} alt="Dahboard logo" width={60}/>
            </Link>

            <div className="flex items-center">
                <ThemeToggler/>
                <DropdownMenu>
                    <DropdownMenuTrigger className="focus:outline-none">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shdcn"/>
                            <AvatarFallback className="text-clack">BT</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator/>
                        <DropdownMenuItem>
                            <Link href="/profile">
                                Profile
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href="/auth">
                                Logout
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

        </div>
    </div>);
}


export default NavBar;
