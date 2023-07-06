import Image from "next/image";
import React from "react";

export const Footer = () => {
    return (
        <footer className="flex flex-col gap-10 max-w-[1440px] w-[90%] m-auto" id="terms">
            <div className="flex flex-col md:flex-row justify-between items-center pt-10">
                <div className="flex flex-col items-center gap-3 md:items-start">
                    <div className="w-[54px] h-[70px] overflow-hidden flex flex-col items-center md:justify-start">
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
                    <ul className="text-[#fff] flex flex-col gap-5 md:flex-row text-center text-base font-inter font-normal leading-[30px]">
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Resources</a></li>
                        <li><a href="#">Carrers</a></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-3 items-center py-8 md:items-start">
                    <span className="font-bebas_neue font-bold text-xl text-[#fff]">Newsletter</span>
                    <div className="flex flex-col items-center gap-4 md:flex-row">
                        <input type="text" placeholder="jhondoe@shuffle.dev" className="outline-none w-[226px] h-[46px] rounded-[50px] text-center"/>
                        <button className="btn-gradient text-base text-white w-[145px] h-[45px] rounded-[50px] ">Subscribe</button>
                    </div>
                </div>
            </div>
                <div className="text-[#fff] flex flex-col gap-10 pb-10 md:flex-row-reverse justify-between">
                    <ul className="flex justify-center gap-6">
                        <li><a href="#">Terms</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Cookies</a></li>
                    </ul>
                    <span className="text-sm text-center">&#169; 2022 DKO. All rights reserved.</span>
                </div>
        </footer>
    );
};
