import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Podcaster",
  description: "Technical test made by Miguel Dario Garcia Quintas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` min-h-screen min-w-screen`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
