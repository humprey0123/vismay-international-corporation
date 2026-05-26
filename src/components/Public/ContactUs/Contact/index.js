export function Contact() {
   const contactDetails = "";
   const contactInput =
      "px-5 py-3 w-full rounded-md bg-[var(--blue)] text-white";
   return (
      <section className="max-w-screen-xl mx-auto py-7 px-5">
         <h6 className="flex justify-center blueText">
            How would you like to contact us?
         </h6>

         {/* Top */}
         <div className="grid md:grid-cols-2 mt-5 gap-15">
            {/* Top Left */}
            <div>
               <div className="flex flex-col gap-8 ">
                  <input className={contactInput} placeholder="First Name" />
                  <input className={contactInput} placeholder="Middle Name" />
                  <input className={contactInput} placeholder="Last Name" />
                  <input className={contactInput} placeholder="Email" />
                  <input className={contactInput} placeholder="Phone" />
               </div>
            </div>
            {/* Top Right */}
            <div className="flex flex-col p-5 bg-[var(--blue)] rounded-md">
               <p className="mb-2 text-white">Your Message (Optional)</p>

               <textarea className="bg-white w-full h-60 p-3 rounded-t-md text-black resize-none" />

               <button className="bg-white mt-3 text-[var(--blue)] rounded-b-md py-2">
                  Send
               </button>
            </div>
         </div>

         {/* Bottom */}
         <div className="grid md:grid-cols-2 gap-15 mt-15">
            <div className="bg-[var(--blue)] text-white p-5 rounded-md">
               <h3>Chat With Us</h3>
               <p>Get product info, login help, and live chat with agent.</p>
               <button className="px-10 py-2 mt-5 rounded-md bg-white text-[var(--blue)]">
                  Send
               </button>
            </div>

            <div className="bg-[var(--blue)] text-white p-5 rounded-md">
               <h3>Leave us some feedback</h3>
               <p>Lets Chat!</p>
               <button className="px-10 py-2 mt-5 rounded-md bg-white text-[var(--blue)]">
                  Send Feedback
               </button>
            </div>
         </div>
      </section>
   );
}
