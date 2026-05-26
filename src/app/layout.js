import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
   variable: "--font-geist-sans",
   subsets: ["latin"],
});

const geistMono = Geist_Mono({
   variable: "--font-geist-mono",
   subsets: ["latin"],
});

export const metadata = {
   title: "Vismay International Corporation",
   description: "Home Page",
   icons: {
      icon: "/vismay.png",
   },
};

export default function RootLayout({ children }) {
   return (
      <html
         lang="en"
         className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
         <body className="min-h-screen flex flex-col md:w-full">
            {children}
         </body>
      </html>
   );
}
