import React from 'react'

const BeforeWove = () => {
  return (
    <div className='mx-auto container flex flex-col xl:justify-between  xl:flex-row '>
      <div className='flex flex-col justify-center items-center  xl:mt-60 xl:justify-start xl:items-start'>
        <div >
          <p className='text-[#FFFFFF] text-2xl text-center xl:text-left md:text-3xl xl:text-4xl font-semibold montserrat-medium not-italic  leading-6 md:leading-[30px] max-w-[157px] md:max-w-[196px] xl:max-w-[406px] -translate-[0.01em] md:pb-4 pb-3 '>
            Before Wove
          </p>
        </div>
        <div >
          <p className='text-[#A3A4A3] text-sm text-center xl:text-left md:text-base avenir not-italic leading-[21px] font-normal md:leading-6 max-w-[343px] md:max-w-[546px] xl:max-w-[296px] md:pb-10 pb-8 -translate-[0.01em]'>
            Silos that make it a nightmare to keep track, making you switch between tools back and forth
          </p>
        </div>
      </div>

      {/** Card  Part*/}
      <div className='flex flex-col xl:mt-16 md:mb-14'>
        <div className='flex flex-row justify-center xl:justify-end items-center ml-24 md:ml-32 mb-4 md:mb-11 xl:mb-[4.75rem]  relative'>
          <div>
            <button className='text-[#FFFFFF]  xl:text-xl font-normal leading-5  avenir py:2 px-2 md:py-4 md:px-4 text-[8px] w-[63px] h-[26px]  md:pb-9  md:text-[13.8316px] md:w-[107.89px] md:h-[44.22px] xl:w-40 xl:h-16  border-solid border border-[#A1A1AA] rounded-[6px]'>Zoom</button>
          </div>
          <img className='w-[34.01px] h-[63.78px] md:w-auto md:h-auto' src='./images/Straight.svg' alt='' />
          <div>
            <button className='text-[#FFFFFF]  xl:text-xl font-normal leading-5  avenir  py:2 px-2 md:py-4 md:px-4 text-[8px] w-[63px] h-[26px] md:pb-9 md:text-[13.8316px] md:w-[107.89px] md:h-[44.22px] xl:w-40 xl:h-16  border-solid border border-[#A1A1AA] rounded-[6px]'>Miro</button>
          </div>
          <img className='w-[34.01px] h-[63.78px] md:w-auto md:h-auto' src='./images/Straight.svg' alt='' />
          <div>
            <button className='text-[#FFFFFF]  xl:text-xl font-normal leading-5  avenir  py:2 px-2 md:py-4 md:px-4 text-[8px] w-[63px] h-[26px] md:pb-9 md:text-[13.8316px] md:w-[107.89px] md:h-[44.22px]  xl:w-40 xl:h-16  border-solid border border-[#A1A1AA] rounded-[6px]'>Figma</button>
          </div>
        </div>

        <div className='grid grid-cols-3 ml-6 md:ml-0 xl:ml-[2.5rem] md:gap-12 xl:gap-14 mb-48 relative'>
          <div>
            <button className='text-[#FFFFFF]  xl:text-xl font-normal leading-5 avenir py:2 px-2 md:py-4 md:px-4 text-[8px] w-[63px] h-[26px] md:pb-9 md:text-[13.8316px] md:w-[107.89px] md:h-[44.22px] md:ml-16 lg:ml-48 xl:ml-24 xl:w-40 xl:h-16  border-solid border border-[#A1A1AA] rounded-[6px]'>Notion</button>
          </div>
          <div>
            <button className='text-[#FFFFFF]  xl:text-xl font-normal leading-5 avenir py:2 px-2 md:py-4 md:px-4 text-[8px] w-[63px] h-[26px] md:pb-9 md:text-[13.8316px] md:w-[107.89px] md:h-[44.22px] ml-7 xl:ml-32 md:ml-8 lg:ml-24 xl:w-40 xl:h-16 border-solid border border-[#A1A1AA] rounded-[6px]'>Excel</button>
          </div>
          <div>
            <button className='text-[#FFFFFF]  xl:text-xl font-normal leading-5 avenir py:2 px-2 md:py-4 md:px-4 text-[8px] w-[63px] h-[26px] md:pb-9 md:text-[13.8316px] md:w-[107.89px] md:h-[44.22px] -ml-[1.25rem] xl:-ml-4 md:-ml-28 xl:w-40 xl:h-16 border-solid border border-[#A1A1AA] rounded-[6px]'>Dropbox</button>
          </div>

          <div className='absolute max-w-[53.66px]  xl:max-w-[149.04px] md:max-w-[109.25px] left-[3.8rem] -top-[1.9rem] md:left-[10.7rem] lg:left-[18.6rem] md:-top-[4.9rem]  xl:-top-[6.7rem] xl:left-64'>
            <img src='./images/Angle.svg' alt='' />
          </div>

          <div className='absolute xl:max-w-[672px] md:max-w-[487.74px] md:-top-[4.7rem] max-w-[280px] left-[2.5rem] -top-[2.4rem] md:left-32 lg:left-64 xl:left-44 xl:-top-28 '>
            <img src='./images/S-Shape.svg' alt='' />
          </div>

          <div className='absolute max-w-[51.19px] left-48 -top-[2.2rem] xl:max-w-[128px] md:max-w-[100.99px] md:top-[-5.1rem] md:left-[23.6rem] lg:left-[32.6rem] xl:-top-[6.75rem] xl:left-[35rem]'>
            <img src='./images/Multi1.svg' alt='' />
          </div>

          <div className='absolute max-w-[137.12px] left-48 -top-[2.3rem]  xl:max-w-[352px] md:max-w-[268.06px]  md:top-[-4.75rem] md:left-96 lg:left-[32rem]  xl:-top-[6.75rem] xl:left-[35rem]'>
            <img src='./images/Hook.svg' alt='' />
          </div>

        </div>
      </div>
    </div>
  )
}
export default BeforeWove