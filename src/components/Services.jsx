import React from 'react'
import styles from '../style'
import {health, medicine, star} from '../assets'
const Services = () => {
  return (
    <section id='services' >
      <div className={`mt-6`}>
        <div className={`mb-3`}>
          <h3 className="flex-1 font-poppins font-semibold ss:text-[40px] text-[30px] text-[#1B8FA1] ss:leading-[100.8px] leading-[75px]">What we offer?</h3>
        </div>
        <div className={`flex flex-col space-y-2 md:flex-row justify-around items-center`}>
          <div className={`box-style px-10 py-6 flex flex-col items-center min-w-[350px] min-h-[350px]`}>
            <img src={medicine} alt="" className={`mb-6 mt-6 w-[80%] h-[80%]`}/>
            <p className={`${styles.paragraph} text-center font-semibold`}>Cost effective<br/>Drug comparision</p>
          </div>
          <div className={`box-style px-10 py-6 flex flex-col items-center min-w-[350px] min-h-[350px]`}>
            <img src={health} alt="" className={`mb-6 mt-6 w-[80%] h-[80%]`}/>
            <p className={`${styles.paragraph} text-center font-semibold`}>Comprehensive medical<br/>Staff locator</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
