import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/shared";
import { MyProvider } from "@/context/MyContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ImageUploader | Upload Your Image",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MyProvider>
          <div className="min-h-screen">
            <Header />
            {children}
          </div>
        </MyProvider>
      </body>
    </html>
  );
}
