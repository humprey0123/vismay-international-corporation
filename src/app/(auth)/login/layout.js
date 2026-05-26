export default function LoginLayout({ children }) {
   return (
      <div className="h-auto w-full">
         <picture className="absolute w-full h-full">
            <source media="(max-width: 768px)" srcSet="/mobile-banner1.png" />
            <img
               src="/webbanner1.png"
               className="w-full h-full object-cover"
               alt="Login Background"
               loading="eager"
            />
         </picture>
         {children}
      </div>
   );
}
