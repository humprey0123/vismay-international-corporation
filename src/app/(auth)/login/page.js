"use client";
import Image from "next/image";
import Link from "next/link";
import { LoginForm } from "./loginForm";

export default function Login() {
   return (
      <div className="h-screen w-full flex justify-center p-4">
         <div className="flex-col flex rounded-lg p-5 pt-3 sm:p-8 sm:pt-5 dark:border-1 border-[var(--foreground)]/50 bg-[var(--background)]/95 gap-2 drop-shadow-lg m-auto p-5 lg:px-20">
            {/* <picture className=" w-60 h-10 mb-3 mx-auto px-5">
               <source
                  media="(prefers-color-scheme: dark)"
                  srcSet="/vismayLogo1.webp"
               />

               <img src="/vismayLogo.webp" alt="Vismay Logo" />
            </picture> */}
            <Image
               src="/vismayLogo.webp"
               width={200}
               height={100}
               alt="Vismay Logo"
               className="w-3/4 sm:w-full h-auto mb-3 mx-auto px-5"
               loading="eager"
            />
            <h4 className="mx-auto">Admin Login</h4>
            {/* Form */}
            <LoginForm />
            <div className="flex flex-col gap-3">
               <Link
                  href="/login"
                  className="pointer-cursor mx-auto text-sm underline"
               >
                  Forgot Password
               </Link>
            </div>
         </div>
      </div>
   );
}
