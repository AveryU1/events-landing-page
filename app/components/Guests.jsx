"use client";
import React from "react";
import guest1 from "../../public/assets/guest1.svg";
import guest2 from "../../public/assets/guest2.svg";
import guest3 from "../../public/assets/guest3.svg";
import Image from "next/image";
import { inter } from "../fonts";
import { motion } from "framer-motion";
export const Guests = () => {
    return (
        <section className="max-w-[1440px] w-[90%] m-auto pt-4" id="team">
            <h2 className="text-white text-4xl md:text-[72px] text-center ">
                Our Guests
            </h2>
            <ul
                className={`${inter.variable} font-inter flex items-center lg:items-start xxs:overflow-auto snap-x snap-mandatory snap-center gap-4 lg:overflow-visible lg:justify-between lg:pt-4 md:gap-[29px] py-4`}
            >
                {[
                    {
                        title: "Methew Smith",
                        text: "Composition Artist",
                        imgUrl: guest1,
                    },
                    {
                        title: "Javin Aleen",
                        text: "Singer",
                        imgUrl: guest2,
                    },
                    {
                        title: "Alex John",
                        text: "Singer",
                        imgUrl: guest3,
                    },
                ].map((elem, index) => (
                    <motion.div
                        key={index}
                        className="rounded-[2.40rem] snap-center xxs:shrink-0 lg:shrink p-[1px] lg:  bg-[#191F2E]"
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 1, delayChildren: 1 }}
                    >
                        <li>
                            <Image
                                className="lg:w-[400px]"
                                src={elem.imgUrl}
                                width={320}
                                height={440}
                                alt="hero-image-1"
                            />
                            <article
                                className="flex flex-col gap-4 justify-center items-center h-24
                    "
                            >
                                <h3 className=" text-white font-bold text-[20px]">
                                    {elem.title}
                                </h3>
                                <p className="text-white font-bebas_neue font-normal">
                                    {elem.text}
                                </p>
                            </article>
                        </li>
                    </motion.div>
                ))}
            </ul>
        </section>
    );
};
