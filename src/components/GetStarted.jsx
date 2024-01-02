import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'
const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-[#FDFDF5] hover:bg-[#dacbad] w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row mb-0`}>
          <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className="text-black font-medium">Get </span>
          </p>
          <img src={arrowUp} alt="arrow" className="ml-1 h-[35%] w-[35%]" />
        </div>
        <p className="font-poppins font-medium text-[18px] mb-0">
        <span className="text-gradient ">Started</span>
      </p>
      </div>
    </div>
  )
}

export default GetStarted
