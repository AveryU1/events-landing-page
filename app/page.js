import { Blog } from "./components/Blog";
import { Guests } from "./components/Guests";
import Hero from "./components/Hero";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { OurPartners } from "./components/OurPartners";
import { WhatWeDo } from "./components/WhatWeDo";

// padding compontes
// font en mobile
// nav color
// alt img cris
// compomentes al margen

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <WhatWeDo />
            <Guests />
            <OurPartners />
            <Blog />
            <Footer />
        </main>
    );
}
