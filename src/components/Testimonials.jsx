// import React from 'react'
// import styles from '../style'
// import { people01, people02, people03 } from '../assets'
// const Testimonials = () => {
//   return (
//     <section id='testimonials' className={`items-center`}>
//       <div className={` mt-6`}>
//         <h3 className="flex-1 font-poppins font-semibold ss:text-[40px] text-[30px] text-[#1B8FA1] ss:leading-[100.8px] leading-[75px]">What people are saying about us</h3>
//       </div>
//       <div className={`flex flex-col space-y-5 items-center sm:flex-row items-center`}>
        
//         <div className={`box-style px-10 py-6 flex flex-col items-center w-[300px] h-[250px]`}>
//           <div>
//             <p className={`${styles.paragraph}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae iste quam doloribus</p>
//           </div>
//           <dir className={`flex`}>
//             <img src={people01} alt="" className={`w-[50%] h-[50%]`} />
//             <p className={`text-[#1B8FA1] font-poppins font-semibold text-[15px] ml-3`}>John Doe</p>
//           </dir>
//         </div>

//         <div className={`box-style px-10 py-6 flex flex-col items-center w-[300px] h-[250px]`}>
//           <div>
//             <p className={`${styles.paragraph}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae iste quam doloribus</p>
//           </div>
//           <dir className={`flex`}>
//             <img src={people02} alt="" className={`w-[50%] h-[50%]`} />
//             <p className={`text-[#1B8FA1] font-poppins font-semibold text-[15px] ml-3`}>Jonathan Moe</p>
//           </dir>
//         </div>

//         <div className={`box-style px-10 py-6 flex flex-col items-center w-[300px] h-[250px]`}>
//           <div>
//             <p className={`${styles.paragraph}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae iste quam doloribus</p>
//           </div>
//           <dir className={`flex `}>
//             <img src={people03} alt="" className={`w-[50%] h-[50%]`} />
//             <p className={`text-[#1B8FA1] font-poppins font-semibold text-[15px] ml-3`}>Lester Singh</p>
//           </dir>
//         </div>


//       </div>
//     </section>
//   )
// }

// export default Testimonials


import React from 'react';
import styles from '../style';
import { people01, people02, people03 } from '../assets';

const Testimonials = () => {
  return (
    <section id='testimonials' className={`items-center`}>
      <div className={`mb-3 mt-6`}>
        <h3 className="flex-1 font-poppins font-semibold  text-[28px] ss:text-[40px] text-[#1B8FA1] ss:leading-[100.8px] leading-[75px]">What people are saying about us</h3>
      </div>
      <div className={`flex flex-col space-y-1 md:flex-row justify-around items-center`}>
        
        <div className={`box-style px-10 py-6 flex flex-col items-center justify-center w-[300px]`}>
          <div>
            <p className={`${styles.paragraph}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae iste quam doloribus</p>
          </div>
          <div className={`flex items-center mt-8`}>
            <img src={people01} alt="" className={`w-[20%] h-[20%]`} />
            <p className={`text-[#1B8FA1] font-poppins font-semibold text-[15px] ml-3`}>John Doe</p>
          </div>
        </div>

        <div className={`box-style px-10 py-6 flex flex-col items-center justify-center w-[300px]`}>
          <div>
            <p className={`${styles.paragraph}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae iste quam doloribus</p>
          </div>
          <div className={`flex items-center mt-8`}>
            <img src={people02} alt="" className={`w-[20%] h-[20%]`} />
            <p className={`text-[#1B8FA1] font-poppins font-semibold text-[15px] ml-3`}>Jonathan Moe</p>
          </div>
        </div>

        <div className={`box-style px-10 py-6 flex flex-col items-center justify-center w-[300px]`}>
          <div>
            <p className={`${styles.paragraph}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae iste quam doloribus</p>
          </div>
          <div className={`flex items-center mt-8`}>
            <img src={people03} alt="" className={`w-[20%] h-[20%]`} />
            <p className={`text-[#1B8FA1] font-poppins font-semibold text-[15px] ml-3`}>Lester Singh</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
