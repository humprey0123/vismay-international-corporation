import Image from "next/image";

export function MilestonesAspirations() {
   return (
      <section className="grid grid-row px-10 mx-auto md:grid-cols-2 gap-10 max-w-screen-2xl lg:max-w-screen-xl 2xl:max-screen-2xl">
         {/* Milestones */}
         <div className="flex flex-col items-center gap-3">
            <div className="bg-[#E0E7FF] p-3">
               <Image
                  src="/icons/Milestones.webp"
                  width={100}
                  height={100}
                  alt="Milestones Icon"
               ></Image>
            </div>
            <h6 className="blueText">Milestones</h6>
            <p className="text-center">
               Founded in 2000, Vismay International Corporation began with a
               mission to make world-class technology accessible to Filipinos.
               Starting as a distributor of electronics and lifestyle products,
               the company quickly expanded its reach and offerings. In 2010, it
               opened its first retail store in Metro Manila, followed by the
               successful nationwide launch of Platinum Karaoke in 2015.
               Embracing the shift to digital, Vismay strengthened its
               e-commerce presence in 2018 to better serve customers across the
               country. Today, with over two decades of experience, Vismay
               remains committed to innovation, quality, and empowering everyday
               lives through accessible, reliable technology.
            </p>
         </div>
         {/* Aspirations */}
         <div className="flex flex-col items-center gap-3">
            <div className="bg-[#E0E7FF] p-3">
               <Image
                  src="/icons/Aspirations.webp"
                  alt="Aspirations Icon"
                  width={100}
                  height={100}
               ></Image>
            </div>
            <h6 className="blueText">Aspirations</h6>
            <p className="text-center">
               At Vismay International Corporation, we aspire to be the foremost
               name in innovative lifestyle technology—bringing cutting-edge
               gadgets, entertainment, and digital experiences closer to every
               Filipino home. Fueled by passion and guided by excellence, we
               envision a future where access to world-class tech is not just a
               luxury, but a standard. We strive to lead with integrity, grow
               with purpose, and always put people first—because for us,
               progress means empowering lives through technology.
            </p>
         </div>
      </section>
   );
}
