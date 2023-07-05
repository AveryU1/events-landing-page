import { Guests } from "./components/Guests";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { WhatWeDo } from "./components/WhatWeDo";

export default function Home() {
    return (
        <main>
            <Navbar />
            {/* <WhatWeDo/> */}
            <Hero />
            <Guests />
        </main>
    );
}
