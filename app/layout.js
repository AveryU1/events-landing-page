import "./globals.css";
import { Inter } from "next/font/google";
import { bebas_neue, inter } from "./fonts";

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${bebas_neue.variable} ${inter.variable} font-bebas_neue  bg-[#0E121B] `}
            >
                {children}
            </body>
        </html>
    );
}
