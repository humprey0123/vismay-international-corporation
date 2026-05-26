import Banner from "@/components/Banner";
import { MilestonesAspirations } from "@/components/Public/Landing/MilestonesAspirations";
import { KaraokeElectronics } from "@/components/Public/Landing/KaraokeElectronics";

export default function Home() {
   return (
      <div className="w-full bg-zinc-50 font-sans dark:bg-[var(--background)]">
         <main className="flex flex-1 w-full flex-col items-center bg-white dark:bg-[var(--background)] space-y-10">
            {/* Main Banner */}
            <Banner src="/home/homeBanner.webp" alt="banner" />
            {/* Milestones & Aspirations */}
            <MilestonesAspirations />
            {/* Karaoke Division & Electronics Division */}
            <KaraokeElectronics />
         </main>
      </div>
   );
}
