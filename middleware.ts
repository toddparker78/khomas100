import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/admin")) {
    const auth = req.headers.get("authorization");
    const user = process.env.BASIC_AUTH_USER ?? "admin";
    const pass = process.env.BASIC_AUTH_PASS ?? "change-me";

    if (!auth || !auth.startsWith("Basic ")) {
      return new NextResponse("Authentication required.", {
        status: 401,
        headers: { "WWW-Authenticate": 'Basic realm="Secure Area"' }
      });
    }

    const [, b64] = auth.split(" ");
    const [u, p] = Buffer.from(b64, "base64").toString().split(":");
    if (u !== user || p !== pass) {
      return new NextResponse("Access denied.", {
        status: 401,
        headers: { "WWW-Authenticate": 'Basic realm="Secure Area"' }
      });
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"]
};
