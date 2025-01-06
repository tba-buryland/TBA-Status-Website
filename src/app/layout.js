import { Mitr } from "next/font/google"; // Import Mitr font
import { Poppins } from "next/font/google"; // Import Poppins font
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import CommonAlert from "@/app/components/commonAlert";


// Import Poppins font as default
const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: "400", // You can adjust the weight if needed
});

export const metadata = {
    title: "HT-CMS",
    description: "A solution to update real-time transport status.",
    author: "CityRail by KONNO",
};

export default function RootLayout({ children }) {
    return (
        <>
            {/* Manually define <html> and <body> */}
            <html lang="th">
            <body className={`${poppins.variable} antialiased`}>
            <div className="flex flex-col min-h-screen">
    {/*<Navbar/>*/}
                <CommonAlert/>
                <div className="flex-grow pt-0"> {/* Ensure no overlap between navbar and content */}
                    <main>{children}</main>
                </div>
                <Footer/>
            </div>
            </body>
            </html>
        </>
    );
}
