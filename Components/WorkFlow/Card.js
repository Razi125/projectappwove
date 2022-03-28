import React from 'react'

const Card = () => {
    return (
        <div className='mx-auto container flex flex-col xl:flex-row xl:justify-center xl:space-x-[7.625rem] items-center '>
            <div className='flex flex-col justify-center items-center mb-10'>
                <div >
                    <img className='xl:w-[64px] xl:h-[64px] md:w-[56px] md:h-[56px] w-[72px] h-[72px]' src='./images/computer_1 2.svg' alt='' />
                </div>
                <div >
                    <p className='text-[#FFFFFF] text-center text-lg md:text-xl font-medium montserrat-medium not-italic leading-5 md:leading-5
                     max-w-[296px] xl:max-w-[280px] md:max-w-[280px] ml-3 -translate-[0.01em] xl:pt-6 xl:pb-3 pt-4 pb-2'>
                        Visibility Into Your Workflow
                    </p>
                </div>
                <div className='xl:space-x-[4.563rem]'>
                    <p className='text-[#A3A3A3] text-center text-sm md:text-base font-normal avenir not-italic leading-5 md:leading-6 xl:leading-[26px] max-w-[343px] md:max-w-[439px] xl:max-w-[296px] -translate-[0.01em] '>
                        Wove centralizes information and events scattered across all of your tools into a single place.
                    </p>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center mb-10'>
                <div>
                    <img className='xl:w-[64px] xl:h-[64px] md:w-[56px] md:h-[56px] w-[72px] h-[72px] xl:mt-6 ' src='./images/structure.svg' alt='' />
                </div>
                <div >
                    <p className='text-[#FFFFFF] text-center text-lg  md:text-xl font-medium montserrat-medium not-italic  leading-5 md:leading-5 max-w-[296px] md:max-w-[228px] -translate-[0.01em] xl:pt-6 xl:pb-3 pt-4 pb-2 '>
                        Multiplayer Everything
                    </p>
                </div>
                <div className='xl:space-x-[4.563rem]'>
                    <p className='text-[#A3A3A3] text-sm text-center md:text-base font-normal avenir not-italic leading-5 md:leading-6 xl:leading-[26px] max-w-[343px] md:max-w-[439px] xl:max-w-[310px] -translate-[0.01em] '>
                    Use the Wove browser extension to comment and annotate on any website.  Link everything back to a Wove room with a single click.
                    </p>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center xl:mb-[50px] md:mb-[128px] mb-[81px]'>
                <div>
                    <img className='xl:w-[64px] xl:h-[64px] md:w-[56px] md:h-[56px] w-[72px] h-[72px] xl:mt-6' src='./images/team.svg' alt='' />
                </div>
                <div>
                    <p className='text-[#FFFFFF] text-lg text-center md:text-xl font-medium montserrat-medium not-italic  leading-5 md:leading-5 max-w-[161px] md:max-w-[179px] -translate-[0.01em] xl:pt-6 xl:pb-3 pt-4 pb-2'>
                        Live Collaboration
                    </p>
                </div>
                <div className='xl:space-x-[4.563rem]'>
                    <p className='text-[#A3A3A3] text-sm text-center md:text-base font-normal avenir not-italic leading-5 md:leading-6 xl:leading-[26px] max-w-[343px] md:max-w-[439px]  xl:max-w-[321px] -translate-[0.01em] '>
                        Embed any web-app into a Wove meeting and work together as a team. Tranform any website into mulitplayer with Wove’s shared browser
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card