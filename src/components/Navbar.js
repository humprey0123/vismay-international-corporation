"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

// what is "use client"?
// what is useEffect?
// what is useState?
// window.scrollY

export function Navbar() {
   const [sidebar, setSidebar] = useState(false);

   const headLinks = [
      { name: "Home", link: "/" },
      { name: "Who We Are", link: "/who-we-are" },
      { name: "Careers", link: "/careers" },
      { name: "Our Brands", link: "/our-brands" },
      { name: "Contact Us", link: "/contact-us" },
   ];

   const [show, setShow] = useState(true);
   const [minimize, setMinimize] = useState(true);
   let lastScrollY = useRef(0);
   const showThreshold = 100;
   const minimizeThreshold = 30;

   useEffect(() => {
      const handleScroll = () => {
         const currentScrollY = window.scrollY;

         if (
            currentScrollY > lastScrollY.current &&
            currentScrollY > showThreshold
         ) {
            setShow(false);
         } else {
            setShow(true);
         }

         if (
            currentScrollY > lastScrollY.current &&
            currentScrollY > minimizeThreshold
         ) {
            setMinimize(false);
         } else {
            setMinimize(true);
         }

         lastScrollY.current = currentScrollY;
      };

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
   });

   return (
      <header
         className={`w-full border-b border-gray-300 dark:border-gray-900 bg-[#0B3C89]/80 md:fixed static top-0 transition-transform duration-250 ease-linear ${show ? "translate-y-0" : "-translate-y-full"}`}
      >
         <nav className="sticky top-0 z-50 flex flex-col md:flex-row md:items-center gap-3 md:gap-5 lg:gap-10 text-white">
            {/* Top bar */}
            <div className="flex items-center justify-between w-full sm:w-auto">
               {/* Burger Button */}
               <button
                  className={`menu-trigger flex flex-col gap-1 md:hidden`}
                  onClick={() => setSidebar(prev => !prev)}
               >
                  <span className="sm:text-5xl text-3xl p-3">☰</span>
               </button>

               {/* Logo */}
               <div className="w-full sm:w-auto md:w-full px-5 md:px-8 dark:bg-[var(--foreground)] bg-white">
                  <Link href="/">
                     <Image
                        src="/vismayLogo.webp"
                        alt="Vismay Logo"
                        width={200}
                        height={50}
                        className={`w-auto sm:w-auto h-auto lg:h-30 md:h-24 sm:h-20 mx-auto ${minimize ? "" : ""}`} // make the header half when at lower parts.
                        loading="eager"
                     />
                  </Link>
               </div>
               <div className="w-full md:w-auto"></div>
            </div>

            {/* Menu */}
            <div className="relative md:flex flex-1 items-center">
               <ul
                  className={`${sidebar ? "flex" : "hidden"} absolute flex-col md:flex md:flex-row md:items-center gap-3 sm:gap-6 lg:gap-8 border-t border-gray-300 pl-10 md:pl-0 lg:pl-10 dark:border-gray-900 md:border-none bg-[var(--blue)] sm:bg-inherit w-full md:w-auto`}
               >
                  {headLinks.map(a => (
                     <li
                        key={a.link}
                        className="flex items-center my-2 md:text-white text-white"
                     >
                        <Link href={a.link}>
                           <h4 className="font-black border-b border-[#E0E7FF] md:border-none">
                              {a.name}
                           </h4>
                        </Link>
                     </li>
                  ))}
               </ul>
            </div>
         </nav>
      </header>
   );
}
