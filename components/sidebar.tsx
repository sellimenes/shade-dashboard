"use client";

import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  PackageSearch,
  Settings,
  ShoppingBag,
  ShoppingCart,
  Star,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import HamburgerButton from "./ui/hamburger-button";
import { Separator } from "./ui/separator";

type Props = {};

const Sidebar = (props: Props) => {
  const [open, setOpen] = useState(true);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <aside
      className={cn(
        "h-full fixed shadow-xl z-[10000] transition-all duration-300 overflow-hidden",
        open ? "w-64" : "w-12"
      )}
    >
      <HamburgerButton onClick={toggleSidebar} />
      <div className="flex items-center justify-between w-full overflow-hidden whitespace-nowrap mt-12 px-5">
        <Link
          href="/"
          className="font-extrabold text-2xl flex items-center gap-3 text-card-foreground mt-2"
        >
          <ShoppingBag
            className={cn(
              "w-6 h-6 cursor-pointer z-50 transition-all duration-300",
              open ? "mb-1" : "mt-2 ml-[-8px]"
            )}
          />
          Shade Ecom
        </Link>
      </div>
      <Separator className="my-3 bg-card-foreground opacity-50" />
      <ul>
        <li className="flex items-center justify-between w-full overflow-hidden whitespace-nowrap leading-10 cursor-pointer bg-[#666cff] text-white">
          <Link href="#" className="flex items-center gap-3 px-5">
            <LayoutDashboard
              className={cn(
                "cursor-pointer transition-all duration-300",
                open ? "w-5 h-5" : "w-6 h-6 ml-[-8px]"
              )}
            />
            Dashboard
          </Link>
        </li>
        <li className="flex items-center justify-between w-full overflow-hidden whitespace-nowrap leading-10 cursor-pointer hover:bg-[#4c4e6414] dark:hover:bg-[#eaeaff14]">
          <Link href="#" className="flex items-center gap-3 px-5">
            <PackageSearch
              className={cn(
                "cursor-pointer transition-all duration-300",
                open ? "w-5 h-5" : "w-6 h-6 ml-[-8px]"
              )}
            />
            Products
          </Link>
        </li>
        <li className="flex items-center justify-between w-full overflow-hidden whitespace-nowrap leading-10 cursor-pointer hover:bg-[#4c4e6414] dark:hover:bg-[#eaeaff14]">
          <Link href="#" className="flex items-center gap-3 px-5">
            <ShoppingCart
              className={cn(
                "cursor-pointer transition-all duration-300",
                open ? "w-5 h-5" : "w-6 h-6 ml-[-8px]"
              )}
            />
            Orders
          </Link>
        </li>
        <li className="flex items-center justify-between w-full overflow-hidden whitespace-nowrap leading-10 cursor-pointer hover:bg-[#4c4e6414] dark:hover:bg-[#eaeaff14]">
          <Link href="#" className="flex items-center gap-3 px-5">
            <Users
              className={cn(
                "cursor-pointer transition-all duration-300",
                open ? "w-5 h-5" : "w-6 h-6 ml-[-8px]"
              )}
            />
            Customers
          </Link>
        </li>
        <li className="flex items-center justify-between w-full overflow-hidden whitespace-nowrap leading-10 cursor-pointer hover:bg-[#4c4e6414] dark:hover:bg-[#eaeaff14]">
          <Link href="#" className="flex items-center gap-3 px-5">
            <Star
              className={cn(
                "cursor-pointer transition-all duration-300",
                open ? "w-5 h-5" : "w-6 h-6 ml-[-8px]"
              )}
            />
            Reviews
          </Link>
        </li>
        <li className="flex items-center justify-between w-full overflow-hidden whitespace-nowrap leading-10 cursor-pointer hover:bg-[#4c4e6414] dark:hover:bg-[#eaeaff14]">
          <Link href="#" className="flex items-center gap-3 px-5">
            <Settings
              className={cn(
                "cursor-pointer transition-all duration-300",
                open ? "w-5 h-5" : "w-6 h-6 ml-[-8px]"
              )}
            />
            Settings
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
