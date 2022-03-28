import React from 'react'

const InputBtn = () => {
    return (
        <div className='mx-auto relative container flex flex-col md:flex-row justify-center items-center md:bg-[#262626] md:max-w-[414px] lg:max-w-[414px] xl:max-w-[547px] md:border-solid md:border-2 md:border-[#404040]  md:box-border md:rounded-[56px] mb-14 md:mb-20 lg:mb-72 xl:mb-32 '>
            <input
                type='text'
                className='montserrat-medium text-sm leading-[14px] not-italic text-[#D4D4D4] tracking-[-0.02em] mx-w-[99px] bg-[#262626] border-solid font-medium border-2 border-[#404040] md:border-none box-border md:rounded-[26px] rounded-[5px]  md:px-5 md:py-3.2 md:mb-0 lg:mb-0  xl:w-[343px] md:w-full lg:w-full w-[343px] py-4 pl-4 mb-4 xl:text-base'
                placeholder='Email Address'
            />
            <button className='bg-[#0585F2] w-[343px] xl:w-[214px] text-[#FFFFFF]  xl:my-[0.375rem] xl:mx-[0.375rem]  rounded-[56px] montserrat-medium tracking-[-0.02em] not-italic font-medium leading-[14px]  text-sm  xl:text-base py-4 md:my-1 md:mx-1 md:py-3 md:px-4 hover:bg-sky-700'>Request Early Access</button>
        </div>
    )
}

export default InputBtn
