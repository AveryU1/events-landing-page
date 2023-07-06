import { whatWeDo } from "../constants/whatWeDo";
import Image from "next/image";

export const CardWhat = () => {
    return (
        <div className="flex gap-5 items-center overflow-x-scroll md:overflow-hidden md:flex-wrap md:justify-between md:gap-[36px]">
            {whatWeDo.map((context) => (
                <div
                    key={context.id}
                    className="rounded-[30px] bg-color-card flex flex-col items-center w-[315px] h-[657px] aspect-square md:w-[455px] xl:w-[555px]"
                >
                    <div className="flex flex-col items-center gap-5 py-4 sm:gap-10 sm:pb-10">
                        <Image
                            src={context.imgEvent}
                            alt={context.event}
                            width={290}
                            height={297}
                            className="lg:w-[405px] h-auto"
                        />
                        <h3 className="text-[#fff] uppercase font-bebas_neue font-bold leading-[30px] text-center text-base md:text-[36px]">
                            {context.event}
                        </h3>
                        <p className="text-[#C1C2C6] flex font-inter leading-[30px] text-center font-normal text-xs md:text-base px-7">
                            {context.content}
                        </p>
                        <button className="text-sm font-inter text-white w-[250px] h-[50px] rounded-[50px] btn-gradient">
                            {context.btnInfo}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};
