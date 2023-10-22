"use client";

import { cn } from "@/lib/utils";
import { ChevronsLeft, Menu, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import HamburgerButton from "./ui/hamburger-button";

type Props = {};

const Sidebar = (props: Props) => {
  const [open, setOpen] = useState(true);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <aside
      className={cn(
        "h-full fixed shadow-xl z-[10000] px-5 transition-all duration-300 overflow-hidden",
        open ? "w-64" : "w-16"
      )}
    >
      <HamburgerButton onClick={toggleSidebar} />
      <div
        className={cn(
          "flex items-center justify-between w-full overflow-hidden whitespace-nowrap mt-12"
        )}
      >
        <Link
          href="/"
          className="font-extrabold text-2xl flex items-center gap-2"
        >
          <ShoppingBag className="w-6 h-6 cursor-pointer z-50 mb-1" />
          Shade Ecom
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
