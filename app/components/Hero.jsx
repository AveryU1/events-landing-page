"use client";
import React from "react";
import heroImage1 from "../../public/assets/hero1.svg";
import heroImage2 from "../../public/assets/hero2.svg";
import heroImage3 from "../../public/assets/hero3.svg";
import { motion } from "framer-motion";

import Image from "next/image";
const Hero = () => {
    return (
        <section className="max-w-[1440px] w-[90%] m-auto relative" id="home">
            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 1, delayChildren: 1 }}
            >
                <motion.div
                    whileInView={{ y: [-100, 0], opacity: [0, 1] }}
                    transition={{ duration: 1, delayChildren: 1 }}
                    className="pt-24 lg:absolute lg:left-[20%]"
                >
                    <h1 className="text-white text-center text-7xl lg:hidden">
                        EVENT 2023
                    </h1>
                    <h1 className="hidden lg:block text-white text-[120px] xl:text-[150px] ">
                        EVENT
                    </h1>
                </motion.div>
                <div className="hidden lg:block text-white lg:absolute lg:bottom-[40%] lg:right-[20%]">
                    <h1 className="text-[120px] xl:text-[150px]">2023</h1>
                </div>
                <ul className="flex items-center lg:items-start xxs:overflow-auto snap-x snap-mandatory snap-center gap-4 lg:overflow-visible lg:justify-center lg:pt-24">
                    <li className="snap-center xxs:shrink-0 lg:shrink bg-border-gradient p-[1px] rounded-full ">
                        <Image
                            loading="eager"
                            className="rounded-full lg:w-[280px]"
                            src={heroImage1}
                            width={320}
                            height={440}
                            alt="hero-image-1"
                        />
                    </li>
                    <li className="snap-center xxs:shrink-0 lg:shrink bg-border-gradient p-[1px] rounded-full">
                        <Image
                            loading="eager"
                            className="rounded-full lg:w-[380px] xl:w-[400px]"
                            src={heroImage2}
                            width={320}
                            height={440}
                            alt="hero-image-2"
                        />
                    </li>
                    <li className="snap-center xxs:shrink-0 lg:shrink bg-border-gradient p-[1px] rounded-full">
                        <Image
                            loading="eager"
                            className="rounded-full lg:w-[280px]"
                            src={heroImage3}
                            width={320}
                            height={440}
                            alt="hero-image-3"
                        />
                    </li>
                </ul>
            </motion.div>
            <div className="relative flex justify-center items-center m-[2rem]">
                <div
                    className="h-96 w-full text-center bg-cover bg-no-repeat bg-center opacity-10 hidden lg:block"
                    style={{ backgroundImage: "url('/assets/crowd.webp')" }}
                ></div>
                <article className="lg:absolute flex flex-col justify-center items-center overflow-hidden">
                    <motion.div
                        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className="text-7xl text-white ">ALL ARE ECO</h2>
                    </motion.div>
                    <motion.div
                        whileInView={{ x: [100, 0], opacity: [0, 1] }}
                        transition={{ duration: 1 }}
                    >
                        <button className="text-[18px] cursor-pointer m-8 font-inter text-white w-[250px] h-[50px] rounded-[50px] btn-gradient">
                            BUY TICKET
                        </button>
                    </motion.div>
                </article>
            </div>
        </section>
    );
};

export default Hero;
