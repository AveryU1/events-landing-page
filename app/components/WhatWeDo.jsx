import { CardWhat } from "../ui/CardWhat";

export const WhatWeDo = () => {
    return (
        <section className="flex flex-col gap-10 overflow-hidden py-24 max-w-[1440px] w-[90%] m-auto" id="about">
                
                    <h2 className="text-[#D9D9D9] text-4xl font-bebas_neue text-center font-bold pt-6  md:text-[72px] md:pl-10">WHAT WE DO</h2>
                    <CardWhat />
            
        </section>
    );
};
