import React from 'react'
import styles from '../style'
const Button = () => {
  return (
    <div type='button' className={`ml-6 px-4 py-2 bg-blue-gradient text-[#FDFDF5] font-poppins font-medium text-[15px] rounded-md mt-3 cursor-pointer  ${styles} `}>
      Login
    </div>
  )
}

export default Button
