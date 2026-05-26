import Image from "next/image";

export function KaraokeElectronics() {
   return (
      <section className="space-y-10 w-full">
         {/* Karaoke Division */}
         <div className="bg-[#06529B] p-10 w-full">
            <div className="flex flex-col lg:flex-row lg:max-w-screen-2xl mx-auto justify-around space-x-10 gap-4 text-white">
               <Image
                  src="/home/karaoke-Division.webp"
                  width={600}
                  height={100}
                  alt="Electronics Division Image"
                  className="mx-auto "
               />
               <div className="order-[-1] items-start flex gap-2 flex-col justify-center">
                  <h6>Karaoke Division</h6>
                  <p className="w-full lg:w-3/4">
                     In 2010, Vismay International Corporation started
                     distributing Platinum Karaoke and introduced a collection
                     of karaoke players with latest technology. This piloted a
                     new era in the entertainment industry with Karaoke systems
                     becoming a must in every Filipino Household.
                  </p>
               </div>
            </div>
         </div>
         {/* Electronics Division */}
         <div className="flex flex-col lg:flex-row space-x-10 gap-4 p-10 lg:max-w-screen-2xl justify-around mx-auto">
            <Image
               src="/home/electronic-Division.webp"
               width={600}
               height={100}
               alt="Electronics Division Image"
               className="mx-auto "
            />
            <div className="items-start lg:items-end content-between order-[-1] lg:order-[1] gap-2 justify-center flex flex-col">
               <h6 className="blueText">Electronics Division</h6>
               <p className="w-full lg:w-3/4">
                  Electronics Division Vismay is an authorized distributor for
                  prestigious brands of electronic products such as Symphony air
                  cooler, strontium SD card, Mifa Bluetooth speaker, Adidas
                  mobile cases etc.
               </p>
            </div>
         </div>
      </section>
   );
}
