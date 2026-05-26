import { useState } from "react";

export function LoginForm() {
   const inputLogin =
      "border border-[var(--foreground)]/30 rounded-sm p-2 text-[var(--foreground)]";

   const [password, setPassword] = useState("");
   const [username, setUsername] = useState("");

   return (
      <div className="col gap-4">
         <div className="col">
            <label>Email</label>
            <input
               className={inputLogin}
               value={username}
               onChange={e => setUsername(e.target.value)}
               placeholder="username"
            ></input>
         </div>
         <div className="col">
            <label>Password</label>
            <input
               className={inputLogin}
               value={password}
               onChange={e => setPassword(e.target.value)}
               placeholder="password"
            ></input>
         </div>
         <button className="drop-shadow-xl w-3/4 py-1 mx-auto rounded-lg mt-5 bg-[var(--blue)] text-white">
            Login
         </button>
      </div>
   );
}
