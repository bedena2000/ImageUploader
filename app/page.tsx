"use client";
import { imageUploadSocket } from "@/services";
import { useEffect, useState } from "react";
import { MainContent } from "@/components/shared";
import { useMyContext } from "@/context/MyContext";

export default function Home() {
  const { state, setTheme } = useMyContext();
  const [socket, setSocket] = useState<any>(null);
  useEffect(() => {
    if (!socket) {
      imageUploadSocket().then((res) => setSocket(res));
    }
  }, []);

  const startSocket = () => {
    socket.upload();
  };

  return (
    <div
      style={{ minHeight: "calc(100vh - 81px)" }}
      className={`${
        state.theme === "Light" ? "" : "bg-slate-950"
      } flex items-center justify-center overflow-hidden`}
    >
      <MainContent />
      {socket && <button onClick={startSocket}>start socket</button>}
    </div>
  );
}
