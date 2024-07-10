"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";

function Navbar() {
    return (
        <div className="relative w-full flex items-center justify-center">
            <NavbarComponent className="top-1" />
        </div>
    );
}

function NavbarComponent({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
                <MenuItem setActive={setActive} active={active} item="About">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/companyprofile">Company profile</HoveredLink>
                        <HoveredLink href="/managementteam">Management Team</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="projects">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/ongoingprojects">Ongoing Projects</HoveredLink>
                        <HoveredLink href="/completedprojects">Completed Projects</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Events">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/ongoingprojects">Image</HoveredLink>
                        <HoveredLink href="/completedprojects">Video</HoveredLink>
                        <HoveredLink href="/completedprojects">Video</HoveredLink>
                    </div>
                </MenuItem>
            </Menu>
        </div>
    );
}

export default Navbar