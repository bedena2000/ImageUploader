"use client";

import { Images, Moon, SunMoon } from "lucide-react";
import { useMyContext } from "@/context/MyContext";
import { style } from "./style";

export function Header() {
  const { state, setTheme } = useMyContext();
  const s = style(state.theme);

  const handleTheme = () =>
    setTheme(state.theme === "Light" ? "Dark" : "Light");

  return (
    <header className={s.header}>
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

        <div onClick={handleTheme} className={s.buttons}>
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
