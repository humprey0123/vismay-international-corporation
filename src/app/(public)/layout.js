import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function RootLayout({ children }) {
   return (
      <div>
         <Navbar></Navbar>
         <div className="flex-1 mt-0 md:mt-24 lg:mt-30">{children}</div>
         <Footer></Footer>
      </div>
   );
}
