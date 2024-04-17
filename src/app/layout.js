import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Define Poppins font with specific configurations
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins", // you can use the 'poppins' variable in your styles or components
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-opensans',
})

export const metadata = {
  title: "Aqar Market",
  description: "Find your dream house here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} mx-auto w-full max-w-[1920px] overflow-x-hidden`}>
        {/* Navbar */}
        <Navigation />
        {children}
        {/* Footer */}
        {/* <Footer /> */}
        </body>
    </html>
  );
}
