"use client";
import { CardWhat } from "../ui/CardWhat";
import { motion } from "framer-motion";
export const WhatWeDo = () => {
    return (
        <section
            className="flex flex-col gap-10 overflow-hidden py-4 max-w-[1440px] w-[90%] m-auto"
            id="about"
        >
            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 1, delayChildren: 1 }}
            >
                <h2 className="text-[#D9D9D9] text-4xl font-bebas_neue text-center font-bold pt-6  md:text-[72px] md:pl-10">
                    WHAT WE DO
                </h2>
            </motion.div>
            <CardWhat />
        </section>
    );
};
