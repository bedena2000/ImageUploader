"use client";

import { MainContent } from "@/components/shared";
import { useMyContext } from "@/context/MyContext";

export default function Home() {
  const { state, setTheme } = useMyContext();
  return (
    <div
      style={{ minHeight: "calc(100vh - 81px)" }}
      className={`${
        state.theme === "Light" ? "" : "bg-slate-950"
      } flex items-center justify-center overflow-hidden`}
    >
      <MainContent />
    </div>
  );
}
