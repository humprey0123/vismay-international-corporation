import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

// fake user (replace with DB later)
const user = {
   username: "admin0123",
   passwordHash: "$2b$10$vS2LNxCBAhziMkSCN.Dcv.e8NMhXjaD3VGz4Jwc3Ba1nnImcOuyAO", // hash for "password123"
};

export async function POST(req) {
   const { username, password } = await req.json();

   if (username !== user.username) {
      return NextResponse.json(
         { message: "Invalid credentials" },
         { status: 401 },
      );
   }

   const isValid = await bcrypt.compare(password, user.passwordHash);

   if (!isValid) {
      return NextResponse.json(
         { message: "Invalid credentials" },
         { status: 401 },
      );
   }

   return NextResponse.json({ message: "Login successful" });
}
