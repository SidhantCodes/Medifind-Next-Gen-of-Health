import React from 'react'
import styles from '../style'
import { people01, people02, people03 } from '../assets'
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <div className={`mb-3 mt-6`}>
        <h3 className="flex-1 font-poppins font-semibold ss:text-[40px] text-[30px] text-[#1B8FA1] ss:leading-[100.8px] leading-[75px]">What people are saying about us</h3>
      </div>
      <div className={`flex justify-around`}>
        
        <div className={`box-style px-10 py-6 flex flex-col items-center w-[300px] h-[250px]`}>
          <div>
            <p className={`${styles.paragraph}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae iste quam doloribus</p>
          </div>
          <dir className={`flex`}>
            <img src={people01} alt="" className={`w-[50%] h-[50%]`} />
            <p className={`text-[#1B8FA1] font-poppins font-semibold text-[15px] ml-3`}>John Doe</p>
          </dir>
        </div>

        <div className={`box-style px-10 py-6 flex flex-col items-center w-[300px] h-[250px]`}>
          <div>
            <p className={`${styles.paragraph}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae iste quam doloribus</p>
          </div>
          <dir className={`flex`}>
            <img src={people02} alt="" className={`w-[50%] h-[50%]`} />
            <p className={`text-[#1B8FA1] font-poppins font-semibold text-[15px] ml-3`}>Jonathan Moe</p>
          </dir>
        </div>

        <div className={`box-style px-10 py-6 flex flex-col items-center w-[300px] h-[250px]`}>
          <div>
            <p className={`${styles.paragraph}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae iste quam doloribus</p>
          </div>
          <dir className={`flex `}>
            <img src={people03} alt="" className={`w-[50%] h-[50%]`} />
            <p className={`text-[#1B8FA1] font-poppins font-semibold text-[15px] ml-3`}>Lester Singh</p>
          </dir>
        </div>


      </div>
    </section>
  )
}

export default Testimonials
