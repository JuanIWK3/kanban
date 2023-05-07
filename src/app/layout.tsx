import SideBar from "@/components/Sidebar";
import "./globals.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kanban",
  description: "Simple Kanban board built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="emerald" lang="en">
      <body className={`${inter.className} flex`}>
        <SideBar />
        {children}
      </body>
    </html>
  );
}
