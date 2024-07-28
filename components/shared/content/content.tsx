"use client";

import { useState, useRef } from "react";
import { ArrowUp } from "lucide-react";
import { style } from "./style";
import { useMyContext } from "@/context/MyContext";

export function MainContent() {
  const [isUploaded, setIsUploaded] = useState(false);
  const [error, setError] = useState<{ message: string } | null>(null);
  const [fileInfo, setFileInfo] = useState<{
    name: string;
    size: string;
  } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { state, setTheme } = useMyContext();

  const s = style(state.theme);

  const handleUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSave = () => {
    if (fileInfo && fileInfo.name && fileInfo.size) {
      setIsUploaded(true);
    }
    return;
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];

      if (!file.type.startsWith("image/")) {
        setError({
          message: "Please upload an image file (JPG, PNG, or GIF).",
        });
        return;
      }

      setFileInfo({
        name: file.name,
        size: (file.size / 1024).toFixed(2) + "KB",
      });
    }
  };

  return (
    <div className={`flex justify-center items-center`}>
      <div className={`container flex justify-center items-center`}>
        {!isUploaded && (
          <div className="w-[600px] h-[400px] rounded-lg p-4 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
            <div className="w-full h-full outline-dotted outline-2 rounded-lg outline-slate-400 flex items-center justify-center">
              <div className="text-center p-4">
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept=".jpg, .jpeg, .png, .gif"
                  onChange={handleFileChange}
                />
                <div
                  className="inline-block bg-sky-700 p-2 rounded-lg hover:-translate-y-1 ease-in transition duration-100"
                  onClick={handleSave}
                >
                  <ArrowUp
                    size={24}
                    color="white"
                    className="cursor-pointer "
                  />
                </div>
                <div className={s.fileInfo}>
                  {fileInfo && (
                    <>
                      <p>File: {fileInfo.name}</p>
                      <p>Size: {fileInfo.size}</p>
                    </>
                  )}
                </div>
                <div>
                  <p className={s.title}>
                    Drag & drop a file or{" "}
                    <span className={s.spanTitle} onClick={handleUpload}>
                      browse files
                    </span>
                  </p>
                  <p className={s.description}>
                    JPG, PNG or GIF - Max file size 2MB
                  </p>
                  {error?.message && (
                    <p className={s.errorMessage}>{error.message}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        {isUploaded && (
          <div className="w-[600px] text-center rounded-lg p-4 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
            <p className={s.upload}>
              <span className="font-bold">Uploading</span>, please wait...
            </p>
            <div className="w-full h-2 bg-slate-200 rounded-md relative">
              <div className="w-1/5 bg-slate-600 rounded-md h-2 transition ease-in duration-100 absolute left-0 translate-x-0 "></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
