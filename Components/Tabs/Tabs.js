import React from "react";

const Tabs = () => {
    const [openTab, setOpenTab] = React.useState(1);

    return (
        <>
            <div className="mx-auto w-full container md:flex justify-between items-center hidden lg:-mt-44 xl:mt-0">
                <div>
                    <ul
                        className="flex flex-row justify-evenly items-center"
                        role="tablist"
                    >
                        <li className="  ">
                            <a
                                className={
                                    "   " +
                                    (openTab === 1
                                        ? "text-[#FFFFFF] xl:max-w-[187px] lg:max-w-[187px] md:max-w-[187px] xl:text-base md:text-sm not-italic md:leading-4  lg:leading-5 font-medium montserrat-medium"
                                        : "text-[#A1A1AA] xl:max-w-[187px] lg:max-w-[187px] xl:text-base md:text-sm md:leading-4  lg:leading-5  font-normal montserrat-medium ")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}

                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                            >
                                Your Hub for Work
                                {openTab === 1
                                    ? <div className="bg-[#C4C4C4] h-[0.1px] md:w-[165px] xl:max-w-[153px] lg:max-w-[187px] mt-[10px]">
                                    </div>
                                    : ""
                                }
                            </a>
                        </li>

                        <li className="">
                            <a
                                className={
                                    "" +
                                    (openTab === 2
                                        ? "text-[#FFFFFF] xl:max-w-[249px] lg:max-w-[249px] xl:text-base lg:text-base  md:text-sm md:leading-4  lg:leading-5 font-medium montserrat-medium"
                                        : "text-[#A1A1AA] xl:max-w-[249px] lg:max-w-[249px] xl:text-base lg:text-base  md:text-sm md:leading-4   lg:leading-5  font-normal montserrat-medium ")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >
                                Interactive Meeetings
                                {openTab === 2
                                    ? <div className="bg-[#C4C4C4]  h-[0.1px] md:w-[165px] xl:max-w-[153px] lg:max-w-[249px] mt-[10px]">
                                    </div>
                                    : ""
                                }
                            </a>

                        </li>

                        <li className="">
                            <a
                                className={
                                    "  " +
                                    (openTab === 3
                                        ? "text-[#FFFFFF] xl:max-w-[187px] lg:max-w-[187px] xl:text-base lg:text-base  md:text-sm md:leading-4  lg:leading-5 font-medium montserrat-medium"
                                        : "text-[#A1A1AA] xl:max-w-[187px] lg:max-w-[187px] xl:text-base lg:text-base  md:text-sm md:leading-4  lg:leading-5  font-normal montserrat-medium")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(3);
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist"
                            >
                                The Meta-Layer
                                {openTab === 3
                                    ? <div className="bg-[#C4C4C4]  h-[0.1px] md:w-[165px] xl:max-w-[130px] lg:max-w-[145px] mt-[10px]">
                                    </div>
                                    : ""
                                }
                            </a>
                        </li>
                    </ul>

                    <div className=" w-full">
                        <div className="w-full" style={{ border: '1px solid #262626' }}></div>
                        <img src="./images/bgImage.svg" className="absolute w-full bg-no-repeat left-0  " alt="" />
                        <div className=" relative flex flex-col break-words shadow-lg rounded">
                            <div>
                                <p className="text-[#FFFFFF] flex justify-center items-center not-italic md:text-base avenir font-normal md:leading-4 md:pt-[30px] xl:pb-12 xl:pt-4 2xl:pt-12 xl:mt-6 2xl:mt-6  ">Visibility into all of your project&apos;s moving pieces. Minus the noise and distractions.</p>
                            </div>

                            <div className="mx-auto container md:px-8 flex justify-center">
                                <div className="tab-content tab-space">
                                    <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                        <div className="  box-border rounded-[16px]  ">

                                            <img className="xl:mt-[-17.52px] lg:mt-[-85.52px] 2xl:mt-[-67.52px] md:mt-[-146.52px] h-[778px] xl:h-[676px]  2xl:h-[983px]" src="./images/Frame 174.svg" />
                                        </div>
                                    </div>

                                    <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                        <div className=" box-border rounded-[16px]  ">
                                            <img className="xl:mt-[-17.52px] lg:mt-[-85.52px] 2xl:mt-[-67.52px] md:mt-[-146.52px] h-[778px] xl:h-[676px] 2xl:h-[983px]" src="./images/Frame 174.svg" />
                                        </div>
                                    </div>

                                    <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                        <div className=" box-border rounded-[16px] ">
                                            <img className="xl:mt-[-17.52px] lg:mt-[-85.52px] 2xl:mt-[-67.52px] md:mt-[-146.52px] h-[778px] xl:h-[676px] 2xl:h-[983px]" src="./images/Frame 174.svg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/** Only Show on Mobile Screen */}
            <div className=" mx-auto px-5 container block md:hidden ">
                <div className="flex flex-col justify-center items-center">
                    <div>
                        <h1 className='text-[#FFFFFF] text-2xl text-center font-semibold montserrat-medium not-italic leading-6 tracking-[-0.02em]  max-w-[222px] mb-3'>
                            Your Hub for Work
                        </h1>
                    </div>
                    <div >
                        <p className='text-[#A3A3A3] text-sm text-center font-[350] avenir leading-[18px] not-italic max-w-[270px] mb-6'>Visibility into all of your project&apos;s moving pieces. No noise or distractions.</p>
                    </div>
                    <div>
                        <img className="h-[228px] mb-14" src="./images/Frame 174.svg" />
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center ">
                    <div>
                        <h1 className='text-[#FFFFFF] text-2xl text-center font-semibold montserrat-medium not-italic  leading-6 tracking-[-0.02em]  max-w-[261px] mb-3'>
                            Interactive Meeetings
                        </h1>
                    </div>
                    <div >
                        <p className='text-[#A3A3A3] text-sm text-center avenir font-[350] not-italic  leading-[18px]  max-w-[270px] mb-6'>Visibility into all of your project&apos;s moving pieces. No noise or distractions.</p>
                    </div>
                    <div>
                        <img className="h-[228px] " src="./images/MeetingScreen.svg" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tabs;