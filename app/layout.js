import localFont from "next/font/local";
import "./globals.css";
import {Lato} from "next/font/google";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"]
})

export const metadata = {
  title: "Enforca Technologies",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${lato.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
