import React from 'react'
import Card from './Card'

const WorkFlow = () => {
    return (
        <>
            <div className='mx-auto px-4 container flex flex-col justify-center items-center xl:mt-[127.50px] md:mt-[45.89] mt-14'>
                <div >
                    <h1 className='text-[#FFFFFF] text-center text-2xl md:text-3xl  xl:text-4xl font-semibold montserrat-medium not-italic  leading-9 md:leading-[30px]  max-w-[343px] md:max-w-[624px]  xl:max-w-[557px] xl:mb-4 md:mb-4 mb-3 xl:ml-7 -translate-[0.01em]'>
                        Built for the Modern Workflow
                    </h1>

                    <p className='text-[#A3A3A3] text-center text-sm md:text-base font-normal avenir not-italic leading-[21px] md:leading-6 xl:leading-[26px] max-w-[343px] md:max-w-[546px] xl:max-w-[624px]  xl:mb-9 md:mb-12 mb-10 -translate-[0.01em]'>
                        Wove aggregates information scattered across all of your tools into once central source of truth. Never forget to follow up again.
                    </p>
                </div>
            </div>
            <div>
                <Card />
            </div>
        </>
    )
}

export default WorkFlow