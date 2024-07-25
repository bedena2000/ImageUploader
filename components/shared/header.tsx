"use client";

import { Images, Moon, SunMoon } from "lucide-react";
import { useMyContext } from "@/context/MyContext";

export function Header() {
  const { state, setTheme } = useMyContext();

  const handleTheme = () =>
    setTheme(state.theme === "Light" ? "Dark" : "Light");

  return (
    <header
      className={`border-b border-slate-200 ${
        state.theme === "Light" ? "" : "bg-slate-950"
      }`}
    >
      <div className={`container flex items-center justify-between px-3 py-4 `}>
        <div className="flex items-center  gap-2">
          {state.theme === "Light" ? (
            <Images size={24} color="black" />
          ) : (
            <Images size={24} color="white" />
          )}
          <h2
            className={`font-bold text-2xl text-black ${
              state.theme === "Light" ? "" : "text-white"
            }`}
          >
            ImageUpload
          </h2>
        </div>

        <div
          onClick={handleTheme}
          className={`p-3 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-xl cursor-pointer ${
            state.theme === "Light" ? "" : "bg-slate-200"
          }`}
        >
          {state.theme === "Light" ? (
            <Moon color="black" />
          ) : (
            <SunMoon color="black" />
          )}
        </div>
      </div>
    </header>
  );
}
