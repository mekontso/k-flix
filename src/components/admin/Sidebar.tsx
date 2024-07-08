import React from 'react';
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import {CreditCard, Folders, LayoutDashboard, Newspaper, Settings, User, Video, Videotape} from "lucide-react";
import Link from "next/link";


const Sidebar = () => {
    return (
        <Command className="bg-secondary rounded-none flex">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Dashboard">
                    <CommandItem>
                        <LayoutDashboard className="mr-2 h-4 w-4"/>
                        <Link href="/admin">Dashboard</Link>
                    </CommandItem>
                </CommandGroup>
                <CommandGroup heading="Content management">
                    <CommandItem>
                        <Video className="mr-2 h-4 w-4"/>
                        <Link href="/admin/content">Content</Link>
                    </CommandItem>
                    <CommandItem>
                        <Videotape className="mr-2 h-4 w-4"/>
                        <Link href="/admin/content-type">Content type</Link>
                    </CommandItem>
                    <CommandItem>
                        <Videotape className="mr-2 h-4 w-4"/>
                        <Link href="/admin/genre">Genre</Link>
                    </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Users management">
                    <CommandItem>
                        <User className='mr-2 h-4 w-4' />
                        <span>Users</span>
                        <CommandShortcut>⌘P</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                        <CreditCard className='mr-2 h-4 w-4' />
                        <span>Billing</span>
                        <CommandShortcut>⌘B</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                        <Settings className='mr-2 h-4 w-4' />
                        <span>Settings</span>
                        <CommandShortcut>⌘S</CommandShortcut>
                    </CommandItem>
                </CommandGroup>
            </CommandList>
        </Command>

    );
};

export default Sidebar;
