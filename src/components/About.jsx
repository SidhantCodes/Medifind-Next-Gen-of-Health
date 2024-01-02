import React from 'react'
import styles from '../style'

const About = () => {
  return (
    <section id='about'>
      <div>
        <h3 className="flex-1 font-poppins font-semibold ss:text-[40px] text-[30px] text-[#1B8FA1] ss:leading-[100.8px] leading-[75px]">About Us</h3>
      </div>
      <div className={`box-style px-10 py-6 ${styles.paragraph}`}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque corporis aliquam adipisci facere facilis eveniet dolore, voluptate voluptates commodi quia debitis, ipsam voluptatem deleniti dolor distinctio. Dolor distinctio ipsa officiis.
        Modi a illo, nisi, nulla officia dicta perferendis eveniet quisquam, iste iusto qui tempora quam delectus nemo. Omnis officia id ratione rem tenetur fuga nesciunt laborum odit! Itaque, nostrum labore.
        Cupiditate ab eveniet aspernatur quibusdam nisi sapiente quidem, corporis nostrum totam ratione dolor inventore doloremque a nihil debitis commodi earum possimus? Temporibus voluptates obcaecati officia ex laudantium commodi, delectus dolores!
      </div>
    </section>
  )
}

export default About
