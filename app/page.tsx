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
    <div className=" font-bold absolute right-5 top-5">
      <button onClick={changeTheme}>Change theme</button>
    </div>
  );
}
