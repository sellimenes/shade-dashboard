"use client";

import SalesOverviewCard from "@/components/sales-overview-card";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <>
      <div className=" font-bold absolute right-5 top-5">
        <button onClick={changeTheme}>Change theme</button>
      </div>
      <div className="flex items-stretch gap-4">
        <SalesOverviewCard className="flex-[4]" />
        <SalesOverviewCard className="flex-[2]" />
        <SalesOverviewCard className="flex-[2]" />
      </div>
    </>
  );
}
