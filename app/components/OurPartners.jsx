import { partners } from '../constants/whatWeDo'
import Image from 'next/image'
import { VscLinkExternal } from 'react-icons/vsc'

export const OurPartners = () => {
  return (
    <section className="flex flex-col gap-10 overflow-hidden max-w-[1440px] w-[90%] m-auto py-24" id='partners'>
        <h2 className="uppercase text-[#D9D9D9] text-4xl font-bebas_neue text-center font-bold pt-6 md:text-[72px]">our partners</h2>
        <ul className='flex flex-col gap-5 sm:flex-row sm:flex-wrap justify-center md:justify-between items-center'>
            {
                partners.map(partner => (
                    <li key={partner.id} className='h-[315px] flex-shrink-0'>
                            <Image src={partner.imgLink} width={350} height={315} alt='partners img' className="md:h-auto"/>
                        <div className='bg-color-card w-[350px] h-[86px] flex-shrink-0 flex justify-center items-center rounded-b-[50px] relative bottom-[85px]'> 
                            <article className='flex justify-center items-center gap-2'>
                                <a href='#' className='text-[#fff] text-lg font-inter font-medium'>{partner.link}</a>
                                <span className='text-[#fff]'><VscLinkExternal/></span>
                            </article>
                        </div>
                    </li>
                ))
            }
        </ul>
    </section>
  )
}
