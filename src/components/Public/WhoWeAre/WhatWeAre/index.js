import Image from "next/image";

export function WhatWeAre() {
   return (
      <div className="w-full flex justify-center">
         <div className="w-full lg:w-1/2 flex flex-col items-center text-center gap-4 w-1/2">
            <Image
               src="/icons/anonymous_figure.webp"
               alt="Mission Image"
               width={100}
               height={100}
            ></Image>
            <h6 className="text-center blueText">What We Are</h6>
            <p>
               {`Vismay International Corp. is a retail operator established
                     in 2000 with the acquisition of Platinum Karaoke, a premium
                     karaoke player brand, and was formally incorporated in
                     2010. In 2023, Vismay expanded its portfolio by acquiring
                     Laifen, further cementing its position as a leading
                     distributor of innovative lifestyle and consumer
                     electronics products in the Philippines.`}
            </p>
            <p>
               {`Vismay International Corp. envisions "To be the leading
                     provider of technology products that seamlessly integrate
                     into people's lives, enabling them to unlock their full
                     potential." We share our passion for service and innovation
                     with our customers in a fun environment.`}
            </p>
            <p>
               {`Vismay International Corp. aims to transform how people
                     live and work by developing dependable, cutting-edge
                     technology products that boost efficiency, connectivity,
                     and convenience. We are dedicated to providing innovative
                     solutions that empower individuals, organizations, and
                     communities to prosper in the digital era.`}
            </p>
         </div>
      </div>
   );
}
