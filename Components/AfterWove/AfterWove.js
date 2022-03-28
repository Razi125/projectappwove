import React from 'react'

const AfterWove = () => {
  return (
    <div className='mx-auto container flex flex-col xl:justify-between xl:flex-row -mt-16'>
      <div className='flex flex-col xl:w-[406px] justify-center items-center xl:mt-64 xl:justify-start xl:items-start'>
        <div >
          <p className='text-[#FFFFFF] text-2xl text-center xl:text-left md:text-3xl font-semibold montserrat-medium not-italic leading-6 md:leading-[30px] max-w-[136px] md:max-w-[176px] lg:max-w-[170px] xl:max-w-[204px] -translate-[0.01em] md:pb-4 pb-3'>
            After Wove
          </p>
        </div>
        <div >
          <p className='text-[#A3A3A3] text-sm text-center xl:text-left md:text-base font-normal avenir not-italic leading-[21px] md:leading-6  max-w-[343px] md:max-w-[546px] xl:max-w-[296px] pb-14 -translate-[0.01em]'>
            Fluid collaboration and visibility across your entire work stack. It’s like your apps all talk to each other.
          </p>
        </div>
      </div>

      {/** Card  Part */}
      <div className='flex flex-col justify-center items-center md:mt-8 xl:mt-[120px]'>
        <div className='grid grid-cols-3 gap-20 md:gap-24 xl:gap-44 md:mb-[10px] mb-6 xl:mb-[5.4rem] relative'>
          <div>
            <button className='text-[#FFFFFF] md:text-xl font-normal leading-5 avenir text-[8px] md:pt-3 md:pb-10 md:px-4 w-[63px] h-[26px]  md:w-[6.735rem] md:h-7  xl:w-40 xl:h-16 border-solid border border-[#60A5FA] rounded-[6px]'>Zoom</button>
          </div>
          <div>
            <button className=' text-[#FFFFFF] md:text-xl font-normal leading-5 avenir  text-[8px] md:pt-3 md:pb-10 md:px-4 w-[63px] h-[26px] md:w-[6.735rem] md:h-7 xl:w-40 xl:h-16  border-solid border border-[#60A5FA] rounded-[6px]'>Miro</button>
          </div>
          <div>
            <button className=' text-[#FFFFFF] md:text-xl font-normal leading-5 avenir text-[8px] md:pt-3 md:pb-10 md:px-4 w-[63px] h-[26px] md:w-[6.735rem] md:h-7 xl:w-40 xl:h-16  border-solid border border-[#60A5FA] rounded-[6px]'>Figma</button>
          </div>

          <div className='absolute max-w-[55.38px] top-8 left-[9.1rem] md:max-w-[77.38px] xl:max-w-[107.38px] md:top-[3.2rem] md:left-[14.1rem] lg:left-[13.7rem]  xl:left-[22.8rem] xl:top-[3.9rem] '>
            <img src='./images/Straight2.svg' alt='' />
          </div>

          <div className='absolute max-w-[316px] top-8 left-4 md:max-w-[465.18px] lg:max-w-[454.18px] xl:max-w-[900px] md:top-[3.4rem] md:left-8 xl:top-16 lg:left-8 xl:left-12'>
            <img src='./images/Multi.svg' alt='' />
          </div>
        </div>

        <div className='flex justify-center items-center mt-5  md:mt-[3.4rem] md:mb-[3.4rem] lg:ml-[2.75rem] xl:mt-4  xl:my-20 '>
          <button className='text-[#FFFFFF] text-[8px] w-[63px] h-[26px] md:text-xl font-normal leading-5  font-[avenir] lg:-ml-[2.35rem] md:py-4 lg:py-3 px-4 md:pb-9 md:w-[122.76px] md:h-[44.24px] lg:w-[150px] lg:h-[60px]  bg-[#63B5FB] rounded-[24px] md:rounded-[8px] lg:rounded-[24px]'>Wove</button>
        </div>

        <div className='grid grid-cols-3 gap-20 md:gap-24 xl:gap-44  mt-8 relative'>
          <div className='absolute max-w-[316px] -top-8 left-4  xl:max-w-[900px] md:max-w-[465.18px] lg:max-w-[454.18px] md:top-[-5.3rem] md:left-8  xl:-top-[7rem] xl:left-[3.1rem] 2xl:left-[3.2rem]'>
            <img src='./images/Group 5523.svg' alt='' />
          </div>

          <div >
            <button className='text-[#FFFFFF] md:text-xl font-normal leading-5 avenir text-[8px] xl:mt-[-0.5rem]
             md:mt-[-1.5rem] mt-3  md:px-4 w-[63px] h-[26px] md:pt-3 md:pb-10 md:w-[6.735rem] md:h-7 xl:w-40 xl:h-16  border-solid border border-[#60A5FA] rounded-[6px]'>Notion</button>
          </div>
          <div>
            <button className=' text-[#FFFFFF] xl:mt-[-0.5rem] md:text-xl font-normal leading-5 avenir text-[8px] md:mt-[-1.5rem] mt-3 md:px-4 w-[63px] h-[26px] md:pt-3 md:pb-10 md:w-[6.735rem] md:h-7 xl:w-40 xl:h-16  border-solid border border-[#60A5FA] rounded-[6px]'>Excel</button>
          </div>
          <div>
            <button className=' text-[#FFFFFF] xl:mt-[-0.5rem] md:text-xl font-normal leading-5 avenir text-[8px] md:mt-[-1.5rem] mt-3 md:px-4 w-[63px] h-[26px] md:pt-3 md:pb-10 md:w-[6.735rem] md:h-7 xl:w-40 xl:h-16  border-solid border border-[#60A5FA] rounded-[6px]'>Dropbox</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AfterWove