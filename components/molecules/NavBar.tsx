"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 text-white", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home">
            Home
          </MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Courses">
          <div className=" flex flex-col space-y-[20px]">
            <HoveredLink href="/courses">all Courses</HoveredLink>
            <HoveredLink href="#">Basic Music Theory</HoveredLink>
            <HoveredLink href="#">Advanced Composition</HoveredLink>
            <HoveredLink href="#">song writing</HoveredLink>
            <HoveredLink href="#">Music Production</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contact"}>
          <MenuItem setActive={setActive} active={active} item="Contact Us">
            
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
