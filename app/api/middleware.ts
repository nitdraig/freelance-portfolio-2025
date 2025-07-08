import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req: any) {
  const token = await getToken({ req });

  const protectedPaths = ["/admin", "/create-post"];
  const path = req.nextUrl.pathname;

  if (protectedPaths.includes(path) && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin", "/create-post"],
};
