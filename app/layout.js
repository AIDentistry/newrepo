import { Inter } from "next/font/google";
import "./styles.css"; 
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="block h-auto w-full bg-black text-center ">
      <body
        className={`${inter.className}  grid grid-cols-1  w-full m-0 place-items-center justify-items-center h-auto bg-[#FFFCEB]`}
      >
        {children}
      </body>
    </html>
  );
}
