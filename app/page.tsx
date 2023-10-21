"use client";

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
    <div className="bg-red-500 font-bold text-white h-full">
      <button onClick={changeTheme}>Change theme</button>
    </div>
  );
}
