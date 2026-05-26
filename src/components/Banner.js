import Image from "next/image";

export default function Banner({ src, alt }) {
   return (
      <Image
         src={src}
         alt={alt}
         width={1920}
         height={600}
         className="w-full h-auto"
         priority
         loading="eager"
      />
   );
}
