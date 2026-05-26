import Banner from "@/components/Banner";
import Image from "next/image";

export default function OurBrands() {
   return (
      <div>
         <Banner src="/Brands/BRAND.webp" alt="Platinum Karaoke" />
         <div className="p-10 lg:max-w-screen-2xl mx-auto">
            <h1 className="text-left blueText ">The Platinum</h1>
            <div>
               <a href="https://platinumkaraoke.com">
                  <Image
                     src="/Brands/pk.webp"
                     alt="The Platinum Brand Image"
                     width={1600}
                     height={600}
                  />
               </a>
            </div>
         </div>
      </div>
   );
}
