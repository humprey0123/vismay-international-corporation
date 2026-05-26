import Banner from "@/components/Banner";
import { WhatWeAre } from "@/components/Public/WhoWeAre/WhatWeAre";
import { VisionMission } from "@/components/Public/WhoWeAre/VisionMission";
export default function WhoWeAre() {
   return (
      <div>
         <Banner src="/who-we-are/WHO_WE_ARE.webp" alt="Who We are Banner" />
         <section className="max-w-screen-2xl flex flex-col mx-auto px-10 py-10 gap-10">
            <VisionMission />
            <WhatWeAre />
         </section>
      </div>
   );
}
