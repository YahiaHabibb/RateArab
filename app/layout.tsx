import type { Metadata } from "next";
import { Poppins, Caveat } from "next/font/google";
import "./globals.css";
import EventProvider from "@/contexts/EventContext";

export const metadata: Metadata = {
  title: "Rate Arab",
  description: "Rating & Reviewing Jobs",
};

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const caveat = Caveat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-caveat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <EventProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/public/assets/Logo/Star logo Rate Arab.png" sizes="any" />
        </head>
        <body
          className={`${caveat.variable} ${poppins.variable} antialiased`}
        >
          {children}
        </body>
      </html>
      </EventProvider>  
  );
}
