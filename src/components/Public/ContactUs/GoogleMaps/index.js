export function GoogleMaps() {
   return (
      <section className="max-w-screen-xl mx-auto py-7 px-5">
         <h2 className="blueText mb-2">Our Location</h2>

         <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10115.320891594587!2d121.04611118276934!3d14.506255374838128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397cf7ce9c44f21%3A0x907a63ce7939f0f!2sVismay%20International%20Corporation!5e0!3m2!1sen!2sph!4v1779414406605!5m2!1sen!2sph"
            className="w-full h-150 rounded-sm"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
         ></iframe>
      </section>
   );
}
