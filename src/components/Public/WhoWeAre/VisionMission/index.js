import Image from "next/image";

export function VisionMission() {
   const divs = "w-full lg:w-1/3 flex flex-col items-center gap-4";

   return (
      <div className="flex flex-col md:flex-row mx-auto gap-10 w-full justify-evenly">
         {/* Vision */}
         <div className={divs}>
            <Image
               src="/icons/vision.webp"
               alt="Vision Image"
               width={100}
               height={100}
            />
            <h6 className="text-center blueText">Vision</h6>
            <p className="text-center">
               Our mission is to transform how people live and work by
               developing dependable, cutting-edge technology products that
               boost efficiency, connectivity, and convenience.We work hard to
               provide innovative solutions that enable people, organizations,
               and communities to prosper in the digital era.
            </p>
         </div>
         {/* Mission */}
         <div className={divs}>
            <Image
               src="/icons/mission.webp"
               alt="Mission Image"
               width={100}
               height={100}
            ></Image>
            <h6 className="text-center blueText">Mission</h6>
            <p className="text-center">
               {`Our vision is to be the leading provider of technology
                     products that seamlessly integrate into people’s lives,
                     enabling them to unlock their full potential. We envision a
                     future where our products are at the forefront of
                     technological advancement, empowering individuals to
                     connect, create, and thrive. We aim to shape the digital
                     landscape and make a positive impact on society.`}
            </p>
         </div>
      </div>
   );
}
