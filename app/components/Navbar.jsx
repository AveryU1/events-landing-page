"use client";
import Image from "next/image";
import { useState } from "react";
import { BiMenu, BiX, BiUser } from "react-icons/bi";

export const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <header>
            <nav className="flex justify-between items-center w-full max-w-full h-24 p-4 fixed z-20 bg-[#0E121B]">
                <div className="w-[54px] h-[70px] overflow-hidden flex flex-col">
                    <Image
                        src="/assets/headphone-sound.svg"
                        alt="headphone-sound"
                        width={54}
                        height={40}
                    />
                    <h1 className="text-[24px] text-center text-white">
                        <a href="#home">DKO</a>
                    </h1>
                </div>
                <div className="hidden lg:flex justify-center items-center">
                    <ul className="hidden lg:flex flex-1 justify-end items-center gap-x-14 text-[#B7C1D8] text-sm md:text-lg">
                        <li>
                            <a
                                href="#home"
                                className="flex flex-col-reverse justify-center items-center"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                className="flex flex-col-reverse justify-center items-center"
                            >
                                About Event
                            </a>
                        </li>
                        <li>
                            <a
                                href="#team"
                                className="flex flex-col-reverse justify-center items-center"
                            >
                                Our Guests
                            </a>
                        </li>
                        <li>
                            <a
                                href="#partners"
                                className="flex flex-col-reverse justify-center items-center"
                            >
                                Partners
                            </a>
                        </li>
                        <li>
                            <a
                                href="#dress"
                                className="flex flex-col-reverse justify-center items-center"
                            >
                                Blog
                            </a>
                        </li>
                        <li>
                            <a
                                href="#terms"
                                className="flex flex-col-reverse justify-center items-center"
                            >
                                Terms
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="hidden lg:flex gap-4">
                    <div className="flex">
                        <button className="text-base text-white w-[145px] h-[45px] rounded-[50px] btn-gradient">
                            Contact us
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                <div className="relative lg:hidden w-[35px] h-[35px] flex justify-center items-center">
                    <BiMenu
                        className="cursor-pointer text-white"
                        onClick={() => setToggle(prev => !prev)}
                        style={{ fontSize: "20px" }}
                    />

                    {toggle && (
                        <div className="fixed flex flex-col items-end top-0 right-0 bottom-0 left-0 w-full z-40 pt-8 bg-[#0E121B] px-4">
                            <BiX
                                className="cursor-pointer text-white"
                                onClick={() => setToggle(prev => !prev)}
                                style={{ fontSize: "30px" }}
                            />
                            <ul className="flex flex-wrap m-0 p-0 w-full h-full items-center justify-center flex-col text-[#B7C1D8] text-sm">
                                <li
                                    onClick={() => setToggle(prev => !prev)}
                                    className="m-4 "
                                >
                                    <a href="#home">Home</a>
                                </li>
                                <li
                                    onClick={() => setToggle(prev => !prev)}
                                    className="m-4 "
                                >
                                    <a href="#about">About Event</a>
                                </li>
                                <li
                                    onClick={() => setToggle(prev => !prev)}
                                    className="m-4 "
                                >
                                    <a href="#team">Our Guests</a>
                                </li>
                                <li
                                    onClick={() => setToggle(prev => !prev)}
                                    className="m-4 "
                                >
                                    <a href="#partners">Partners</a>
                                </li>
                                <li
                                    onClick={() => setToggle(prev => !prev)}
                                    className="m-4 "
                                >
                                    <a href="#dress">Blog</a>
                                </li>
                                <li
                                    onClick={() => setToggle(prev => !prev)}
                                    className="m-4 "
                                >
                                    <a href="#terms">Terms</a>
                                </li>
                                <button className="text-base text-white w-[145px] h-[45px] rounded-[50px] btn-gradient">
                                    Contact us
                                </button>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};
