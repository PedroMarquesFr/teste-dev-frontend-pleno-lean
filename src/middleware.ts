import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  const token = request.cookies.get("fakeToken")?.value;
  const signInURL = new URL("/", request.url);
  if (!token) {
    return NextResponse.redirect(signInURL);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/patients"],
};
