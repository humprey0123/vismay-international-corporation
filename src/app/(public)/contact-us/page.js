import Banner from "@/components/Banner";
import { GoogleMaps } from "@/components/Public/ContactUs/GoogleMaps";
import { Contact } from "@/components/Public/ContactUs/Contact";

export default function ContactUs() {
   return (
      <div>
         <Banner src="/ContactUs/CONTACT_US.webp" alt="Contact Us Banner" />
         {/* Contact Us */}
         <Contact />
         {/* Map */}
         <GoogleMaps></GoogleMaps>
      </div>
   );
}
