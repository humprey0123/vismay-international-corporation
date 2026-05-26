"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function Sample() {
   const [sidebar, setSidebar] = useState(false);

   const headLinks = [
      { name: "Home", link: "/" },
      { name: "Who We Are", link: "/sample1" },
      { name: "Careers", link: "/sample2" },
      { name: "Our Brands", link: "/sample4" },
   ];

   return (
      <nav className="m-2 flex flex-col md:flex-row md:items-center gap-3 md:gap-10">
         {/* Top bar */}
         <div className="flex items-center justify-between w-full md:w-auto">
            {/* Burger Button */}
            <button
               className={`menu-trigger flex flex-col gap-1 md:hidden`}
               onClick={() => setSidebar(prev => !prev)}
            >
               <span className="text-2xl p-3">☰</span>
            </button>

            {/* Logo */}
            <div className="w-full px-3 md:px-8">
               <Link href="/">
                  <Image
                     src="/vismayLogo.webp"
                     alt="Vismay Logo"
                     width={200}
                     height={50}
                  />
               </Link>
            </div>
         </div>

         {/* Menu */}
         <ul
            className={`${sidebar ? "block" : "hidden"} md:flex md:flex-row gap-10 border-t border-gray-300 dark:border-gray-900 md:border-none `}
         >
            {headLinks.map(a => (
               <li
                  key={a.link}
                  className="flex items-center h-10 backdrop-blur-md"
               >
                  <Link href={a.link}>{a.name}</Link>
               </li>
            ))}
         </ul>
      </nav>
   );
}
