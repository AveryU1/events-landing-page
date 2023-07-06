import React from "react";
import blog1 from "../../public/assets/blog1.svg";
import blog2 from "../../public/assets/blog2.svg";
import Image from "next/image";
import { BiLinkExternal } from "react-icons/bi";
export const Blog = () => {
    return (
        <section className="bg-[#191F2E] pt-24 mt-24">
            <div className="max-w-[1440px] w-[90%] m-auto">
                <h2 className="text-white text-[72px] text-center">Blog</h2>
                <ul className="flex items-center lg:items-start xxs:overflow-auto snap-x snap-mandatory snap-center gap-4 lg:gap-[120px] lg:overflow-visible lg:justify-between lg:pt-24">
                    {[
                        {
                            text: "Sound Record",
                            name: "John Doe",
                            date: "19 JAN 2024",
                            title: "Gesture for the people and the culture",
                            "btn-text:": "Read More",
                            imgUrl: blog1,
                        },
                        {
                            text: "Stage Show",
                            name: "George Berger",
                            date: "20 JAN 2024",
                            title: "Gesture for the people and the culture",
                            "btn-text:": "Read More",
                            imgUrl: blog2,
                        },
                    ].map((item, index) => (
                        <l1
                            key={index}
                            className="text-white flex flex-col m-auto items-center gap-4 w-[312px] lg:w-full snap-center xxs:shrink-0 lg:shrink p-[1px]  overflow-hidden"
                        >
                            <Image
                                src={item.imgUrl}
                                width={280}
                                className="transform scale-[200%] lg:scale-[100%] lg:w-full "
                            />
                            <article className="flex justify-center items-center gap-4 mt-[80px] lg:mt-[20px]">
                                <div className="flex justify-center items-center font-inter  rounded-[15px] bg-[#0E121B] text-[12px]">
                                    <p className="p-2">{item.text}</p>
                                </div>
                                <div className="font-bebas_neue flex gap-2">
                                    <p className="font-normal">{item.name}</p>
                                    <p>{item.date}</p>
                                </div>
                            </article>
                            <h3 className="font-inter font-bold text-[30px] text-center">
                                {item.title}
                            </h3>
                            <button className="font-inter flex gap-2 justify-center items-center border-white border-[1px] p-4 rounded-[40px] cursor-pointer">
                                Read More{" "}
                                <BiLinkExternal style={{ fontSize: "20px" }} />
                            </button>
                        </l1>
                    ))}
                </ul>
            </div>
        </section>
    );
};
