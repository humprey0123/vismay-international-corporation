"use client";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
   return (
      <div className="w-full h-full bg-[url('/footer/Footer.webp')] bg-cover bg-center text-white p-10 mt-7">
         <div className="w-full flex flex-col md:flex-row md:max-w-screen-2xl mx-auto items-center justify-around gap-5">
            {/* left */}
            <div className="flex flex-col lg:flex-col">
               <p className="font-bold text-center md:text-start">
                  Vismay International Corporation is now DPO/DPS compliant,
                  certified by the National Privacy Commission
               </p>
               <div className="flex flex-col sm:flex-row mx-auto md:mx-0 items-center">
                  <Image
                     src="/vismayLogo1.webp"
                     width={300}
                     height={120}
                     alt="Vismay Logo"
                     className="w-full max-w-[300px] h-auto"
                  />

                  <Link href="/">
                     <Image
                        src="/icons/SPC-DPO-DPS-Seal-of-Registration-2025-1438x1438-1-1024x1024.png"
                        width={75}
                        height={75}
                        alt="DPO DPS Approved Image"
                        className="md:max-w-[50px] h-auto"
                     />
                  </Link>
               </div>
            </div>

            {/* Right Side */}
            <div className="w-full order-[-1] md:order-[1]">
               <div className="flex flex-col lg:flex-row justify-around gap-7 md:gap-4 text-center lg:text-start">
                  <div className="space-y-10">
                     <Link href="/">
                        <h4>Connect With Us</h4>
                     </Link>
                     <div className="flex gap-4 justify-center">
                        <a href="https://facebook.com/vismayinternationalcorp">
                           <Image
                              src="/icons/facebook.webp"
                              width={50}
                              height={50}
                              alt="Facebook Image"
                           />
                        </a>
                        <a href="https://www.linkedin.com/company/vismay-international-corporation/">
                           <Image
                              src="/icons/LinkedIn.webp"
                              width={50}
                              height={50}
                              alt="Instagram Image"
                           />
                        </a>
                     </div>
                  </div>
                  <Link href="/who-we-are">
                     <h4>About Us</h4>
                  </Link>
                  <Link href="/careers">
                     <h4>Careers</h4>
                  </Link>
                  <Link href="/our-brands">
                     <h4>Our Brands</h4>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}
