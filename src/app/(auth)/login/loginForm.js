import { useState } from "react";

export function LoginForm() {
   const inputLogin =
      "border border-[var(--foreground)]/30 rounded-sm p-2 text-[var(--foreground)]";

   const [password, setPassword] = useState("");
   const [username, setUsername] = useState("");

   const handleLogin = async () => {
      const res = await fetch("/api/login", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            username,
            password,
         }),
      });

      const data = await res.json();
      console.log(data);
   };

   return (
      <div className="col gap-4">
         <div className="col">
            <label>Email</label>
            <input
               className={inputLogin}
               value={username}
               onChange={e => setUsername(e.target.value)}
               placeholder="username"
            />
         </div>

         <div className="col">
            <label>Password</label>
            <input
               type="password"
               className={inputLogin}
               value={password}
               onChange={e => setPassword(e.target.value)}
               placeholder="password"
            />
         </div>

         <button
            onClick={handleLogin}
            className="drop-shadow-xl w-3/4 py-1 mx-auto rounded-lg mt-5 bg-[var(--blue)] text-white"
         >
            Login
         </button>
      </div>
   );
}
2;
