import React from 'react'
import styles from '../style'
import { arrowUp, getstarted } from '../assets'
const GetStarted = () => {
  return (
    <div>
      <img src={getstarted} alt="" className={`h-[100%] w-[70%] cursor-pointer hover:drop-shadow-lg`} />
    </div>
  )
}

export default GetStarted
