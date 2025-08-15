import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Khomas 100 – Gravel Cycling Race, Namibia",
  description: "Official site template for the Khomas 100 gravel race in Namibia. Register to ride, get event info, and view updates.",
  openGraph: {
    title: "Khomas 100 – Gravel Cycling Race, Namibia",
    description: "Register to ride, get event info, and view updates.",
    url: "https://example.com",
    siteName: "Khomas 100",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Khomas 100 – Gravel Cycling Race, Namibia",
    description: "Register to ride, get event info, and view updates.",
    images: ["/og.jpg"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-neutral-200 bg-white/70 backdrop-blur sticky top-0 z-50">
          <div className="container py-4 flex items-center justify-between">
            <a href="/" className="text-xl font-bold">Khomas<span className="text-neutral-500">100</span></a>
            <nav className="flex gap-4">
              <a className="hover:underline" href="/#about">About</a>
              <a className="hover:underline" href="/#route">Route</a>
              <a className="hover:underline" href="/#schedule">Schedule</a>
              <a className="hover:underline" href="/register">Enter Race</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-neutral-200 mt-16">
          <div className="container py-10 text-sm text-neutral-600">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <p>© {new Date().getFullYear()} Khomas100. All rights reserved.</p>
              <div className="flex gap-4">
                <a href="https://khomas100.com.na/" target="_blank" rel="noreferrer" className="hover:underline">Official Event</a>
                <a href="/admin" className="hover:underline">Admin</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
