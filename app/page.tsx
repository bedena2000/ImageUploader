"use client";
import { MainContent } from "@/components/shared";
import { imageUploadSocket } from "@/services";
import { useEffect, useState } from "react";

export default function Home() {
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
    <div>
      <MainContent />
      {socket && <button onClick={startSocket}>start socket</button>}
    </div>
  );
}
