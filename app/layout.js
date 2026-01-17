import { Geist, Geist_Mono } from "next/font/google";
import { Cairo } from "next/font/google";
import Container from "../src/components/ui/container.jsx";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo", 
});

export const metadata = {
  title: "النهضة التقنية",
  icons: {
    // icon: "/favicon.png",
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={`${cairo.className} antialiased`}>
      
        {children}
      </body>
    </html>
  );
}
