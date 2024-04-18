import { Poppins, Open_Sans, Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Navigation from "@/components/Navigation/Navigation";

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

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Aqar Market",
  description: "Find your dream house here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${roboto.variable} ${openSans.variable} mx-auto w-full max-w-[1920px] overflow-x-hidden`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
