import React from 'react'
import { discount, robot} from '../assets'
import styles from '../style'
import GetStarted from './GetStarted'

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} bg-[#FDFDF5] mt-6`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[30px] h-[30px]" />
          <p className={`${styles.paragraph} ml-1`}>Get <span className="text-black font-semibold">50%</span> off for first month for all accounts</p>
        </div>    
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-[#1B8FA1] ss:leading-[100.8px] leading-[75px]">
            The New {" "}
            <br className="sm:block hidden"/><span className="text-gradient">Generation </span>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>  
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[48px] text-[#1B8FA1] ss:leading-[100.8px] leading-[75px]">of Healthcare</h1> 
        <p className={`${styles.paragraph} text-dimwhite max-w-[800px] mt-4`}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, sit corrupti quidem aspernatur nostrum molestiae repellat eaque voluptate enim sequi explicabo soluta dicta dolorem laboriosam cupiditate doloribus maxime, autem eligendi. </p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="" className="w-100% h-100% relative z-[5]" />
        {/* <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" /> */}
        {/* <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" /> */}
      </div>
      <div className={`w-[50%] ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  )
}

export default Hero
