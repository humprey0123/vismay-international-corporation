// import { NextResponse } from "next/server";
// import bcrypt from "bcrypt";

// const fakeUser = {
//    email: "testgmail.com",
// //bcrypt hash for passwordL "password123"
// passwordHash:
//       "$2b$10$CwTycUXWue0Thq9StjUM0uJ8b5Y3v2xk0yqzWQ3Q8a9X5p1Q8fG6K",
// };

// export async function POST(req: Request) {
//    const {email, password} = await req.json();
//    // 1. check user
//    if(email !== fakeUser.email) {
//       return NextResponse.json(
//          {message: "Invalid credentials"},
//          {status: 401}
//       );
//    }

//    const isValid = await bcrypt.compare(password, fakeUser.passwordHash);

//    if (!isValid) {
//       return NextResponse.json(
//          {message: "Invalid credentials"},
//          {status: 401}
//       );
//    }

//    return NextResponse.json({
//       message: "Login successful",
//       user: {email},
//    });
// }
