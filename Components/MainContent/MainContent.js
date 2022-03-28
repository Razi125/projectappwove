import React from 'react'
import InputBtn from '../commonComponents/InputBtn/InputBtn'

const MainContent = () => {
  return (
    <>
      <div className='mx-auto container pt-8 md:pt-24 xl:pt-[108px] relative'>
        <img className='absolute xl:top-[-100px] xl:pl-[-189px] lg:top-[-43px] md:top-[-43px] top-[-35px] xl:w-[70rem] lg:w-[66rem] md:w-[66rem] w-[514px] xl:-ml-[6.5rem] lg:-ml-[83px] md:-ml-[0px]' src='./images/backgroundImage.png' alt='' />

        <div className='flex flex-col justify-center items-center'>
          <p className='text-[#FFFFFF] max-w-[343px] md:max-w-[552px] lg:max-w-[584px] xl:max-w-[737px] tracking-[-0.01em] not-italic text-center text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-bold montserrat leading-[33px] md:leading-[48px] lg:leading-[48px] xl:leading-[66px] pb-4 md:pb-6'>The Collaboration Meta-Layer for <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#0585F2] to-[#A1FCE8]'>
            Work</span></p>
          <p className='text-[#D4D4D4] max-w-[327px] md:max-w-[552px] lg:max-w-[584px] xl:max-w-[636px] pb-7 text-center text-sm md:text-base lg:text-base xl:text-lg font-light avenir leading-[21px] md:leading-6 lg:leading-[23px] md:pb-8'>The apps you already use, accessible and visible in one place. Host meetings, track progress, and organize your tools in Wove.</p>
        </div>
      </div>
      <InputBtn />
    </>
  )
}

export default MainContent
