import "../styles/globals.css";

import { IBM_Plex_Mono } from "@next/font/google";
const plex = IBM_Plex_Mono({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={plex.className} lang="en">
      <head />
      <body className="slide-in-left text-neutral-800 dark:bg-neutral-900 dark:text-white">
        {children}
      </body>
    </html>
  );
}
