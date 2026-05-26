import Image from "next/image";

export function CareerContent() {
   const jobLinks =
      "px-4 sm:px-10 py-2 rounded-full bg-[#0872d7] hover:bg-white hover:text-[#0872d7] hover:border-[#0872d7] border hover:cursor-pointer font-bold";
   return (
      <section className="lg:max-w-screen-xl md:max-w-screen-sm mx-auto p-10 colLgRow space-x-10 gap-10 md:gap-5 xl:gap-10">
         {/* Jobs Available */}
         <div className="w-full my-auto">
            <h1 className="tracking-wider border-b-2 border-[#06529b] blueText">
               DIGITAL ONLINE
            </h1>
            <h3 className="blueText font-black">{`Job(s) available`}</h3>
            <ul className="space-y-2 list-disc list-inside ml-0 md:ml-10 font-bold">
               <li>Product and Sales Training Officer</li>
               <li>Property Leasing Officer (Airbnb)</li>
               <li>Project and Property Officer</li>
               <li>Warehouse and Logistic Manager</li>
               <li>IT Manager</li>
               <li>FP&A Manager</li>
               <li>Admin Officer</li>
               <li>Livestreamer</li>
               <li>{`General Manager (Paragon)`}</li>
               <li>Accounting Supervisor</li>
               <li>Key Accounts Manager</li>
            </ul>
            {/* App Links */}
            <div className="flex flex-row text-white flex justify-start gap-3 mt-5">
               <a href="https://ph.jobstreet.com/vismay-international-corp-jobs">
                  <button className={jobLinks}>Jobstreet</button>
               </a>
               <a href="https://ph.indeed.com/cmp/Xtremeway-Corporation/jobs">
                  <button className={jobLinks}>Indeed</button>
               </a>
               <a href="https://www.facebook.com/vismayinternationalcorp">
                  <button className={jobLinks}>Facebook</button>
               </a>
            </div>
         </div>
         {/* Image */}
         <div className="w-full order-[-1] lg:order-[1]">
            <div className="bg-[var(--blue)] h-full p-5 w-full flex">
               <Image
                  src="/careers/HR_DEPARTMENT_00.webp"
                  alt="Image of people in a company"
                  width={500}
                  height={500}
                  className="bg-white p-2 rounded-full m-auto"
               />
            </div>
         </div>
      </section>
   );
}
