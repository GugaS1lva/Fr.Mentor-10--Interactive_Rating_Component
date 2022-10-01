import Image from 'next/image'
import React, { useState } from 'react'

import WorkIcon from '../../../public/images/icon-work.svg'
import PlayIcon from '../../../public/images/icon-play.svg'
import StudyIcon from '../../../public/images/icon-study.svg'
import ExerciseIcon from '../../../public/images/icon-exercise.svg'
import SocialIcon from '../../../public/images/icon-social.svg'
import SelfCareIcon from '../../../public/images/icon-self-care.svg'

import { titles } from '../../../pages/api'
import { currentDaily } from '../../../pages/api'
import { previousDaily } from '../../../pages/api'
import { currentWeekly } from '../../../pages/api'
import { previousWeekly } from '../../../pages/api'
import { currentMonthly } from '../../../pages/api'
import { previousMonthly } from '../../../pages/api'

// const [data, setData] = useState('')
// const [data2, setData2] = useState('')

// const switchToDailyView = () => {
//     setData(currentDaily)
//     setData2(previousDaily)
// }
// const switchToWeeklyView = () => {
//     setData(currentWeekly)
//     setData2(previousWeekly)
// }
// const switchToMonthlyView = () => {
//     setData(currentMonthly)
//     setData2(previousMonthly)
// }

{/* <div className='bg-green-900 text-white w-[300px] '> */ }
{/* <h3>Current:{data}</h3> */ }
{/* <br /> */ }
{/* <h3>Last Week: {data2}</h3> */ }
{/* </div> */ }
{/* <button onClick={() => switchToDailyView()}>Alternar para exibição diária</button> <br /> */ }
{/* <button onClick={() => switchToWeeklyView()}>Alternar para exibição semanal</button> <br /> */ }
{/* <button onClick={() => switchToMonthlyView()}>Alternar para exibição mensal</button> <br /> */ }

const Cards = () => {
    return (
        <>
            <div className='mb-[100px] mt-[25px]'>
                <div className='bg-[hsl(15,100%,70%)] rounded-xl'>
                    <div className='flex justify-end px-4'>
                        <Image
                            className='relative'
                            src={WorkIcon}
                            width={79}
                            height={79}
                            alt={"Card-Icon"}
                        ></Image>
                    </div>
                </div>

                <div className='bg-[hsl(235,46%,20%)] hover:bg-[hsl(235,45%,31%)] hover:cursor-pointer transition px-5 py-6  rounded-xl -mt-8 absolute w-[276px]'>
                    <div className='flex justify-between'>
                        <span className='font-medium'>{titles[0]}</span>
                        <span className='text-[hsl(236,100%,87%)] hover:text-white hover:cursor-pointer transition text-xl'>•••</span>
                    </div>

                    <div className='flex items-center justify-between'>
                        <span className='font-light text-3xl'></span>
                        <span className='text-[hsl(236,100%,87%)] text-sm'>Last Week - 36hrs</span>
                    </div>
                </div>
            </div>

            <div className='mb-[100px]'>
                <div className='bg-[hsl(195,74%,62%)] h-[79px] rounded-xl'>
                    <div className='flex justify-end px-4'>
                        <Image
                            className='relative'
                            src={PlayIcon}
                            width={76}
                            height={77}
                            alt={"Card-Icon"}
                        ></Image>
                    </div>
                </div>

                <div className='bg-[hsl(235,46%,20%)] hover:bg-[hsl(235,45%,31%)] hover:cursor-pointer transition px-5 py-6  rounded-xl -mt-8 absolute w-[276px]'>
                    <div className='flex justify-between'>
                        <span className='font-medium'>{titles[1]}</span>
                        <span className='text-[hsl(236,100%,87%)] hover:text-white hover:cursor-pointer transition text-xl'>•••</span>
                    </div>

                    <div className='flex items-center justify-between'>
                        <span className='font-light text-3xl'>32hrs</span>
                        <span className='text-[hsl(236,100%,87%)] text-sm'>Last Week - 36hrs</span>
                    </div>
                </div>
            </div>

            <div className='mb-[100px]'>
                <div className='bg-[hsl(348,100%,68%)] h-[79px] rounded-xl'>
                    <div className='flex justify-end px-4'>
                        <Image
                            className='relative'
                            src={StudyIcon}
                            width={79}
                            height={79}
                            alt={"Card-Icon"}
                        ></Image>
                    </div>
                </div>

                <div className='bg-[hsl(235,46%,20%)] hover:bg-[hsl(235,45%,31%)] hover:cursor-pointer transition px-5 py-6  rounded-xl -mt-8 absolute w-[276px]'>
                    <div className='flex justify-between'>
                        <span className='font-medium'>{titles[2]}</span>
                        <span className='text-[hsl(236,100%,87%)] hover:text-white hover:cursor-pointer transition text-xl'>•••</span>
                    </div>

                    <div className='flex items-center justify-between'>
                        <span className='font-light text-3xl'>32hrs</span>
                        <span className='text-[hsl(236,100%,87%)] text-sm'>Last Week - 36hrs</span>
                    </div>
                </div>
            </div>

            <div className='mb-[100px]'>
                <div className='bg-[hsl(145,58%,55%)] h-[79px] rounded-xl'>
                    <div className='flex justify-end px-4'>
                        <Image
                            className='relative'
                            src={ExerciseIcon}
                            width={81}
                            height={55}
                            alt={"Card-Icon"}
                        ></Image>
                    </div>
                </div>

                <div className='bg-[hsl(235,46%,20%)] hover:bg-[hsl(235,45%,31%)] hover:cursor-pointer transition px-5 py-6  rounded-xl -mt-8 absolute w-[276px]'>
                    <div className='flex justify-between'>
                        <span className='font-medium'>{titles[3]}</span>
                        <span className='text-[hsl(236,100%,87%)] hover:text-white hover:cursor-pointer transition text-xl'>•••</span>
                    </div>

                    <div className='flex items-center justify-between'>
                        <span className='font-light text-3xl'>32hrs</span>
                        <span className='text-[hsl(236,100%,87%)] text-sm'>Last Week - 36hrs</span>
                    </div>
                </div>
            </div>

            <div className='mb-[100px]'>
                <div className='bg-[hsl(264,64%,52%)] h-[79px] rounded-xl'>
                    <div className='flex justify-end px-4'>
                        <Image
                            className='relative'
                            src={SocialIcon}
                            width={75}
                            height={100}
                            alt={"Card-Icon"}
                        ></Image>
                    </div>
                </div>

                <div className='bg-[hsl(235,46%,20%)] hover:bg-[hsl(235,45%,31%)] hover:cursor-pointer transition px-5 py-6  rounded-xl -mt-8 absolute w-[276px]'>
                    <div className='flex justify-between'>
                        <span className='font-medium'>{titles[4]}</span>
                        <span className='text-[hsl(236,100%,87%)] hover:text-white hover:cursor-pointer transition text-xl'>•••</span>
                    </div>

                    <div className='flex items-center justify-between'>
                        <span className='font-light text-3xl'>32hrs</span>
                        <span className='text-[hsl(236,100%,87%)] text-sm'>Last Week - 36hrs</span>
                    </div>
                </div>
            </div>

            <div className='mb-[100px]'>
                <div className='bg-[hsl(43,84%,65%)] h-[79px] rounded-xl'>
                    <div className='flex justify-end px-4'>
                        <Image
                            className='relative'
                            src={SelfCareIcon}
                            width={67}
                            height={67}
                            alt={"Card-Icon"}
                        ></Image>
                    </div>
                </div>

                <div className='bg-[hsl(235,46%,20%)] hover:bg-[hsl(235,45%,31%)] hover:cursor-pointer transition px-5 py-6  rounded-xl -mt-8 absolute w-[276px]'>
                    <div className='flex justify-between'>
                        <span className='font-medium'>{titles[5]}</span>
                        <span className='text-[hsl(236,100%,87%)] hover:text-white hover:cursor-pointer transition text-xl'>•••</span>
                    </div>

                    <div className='flex items-center justify-between'>
                        <span className='font-light text-3xl'>32hrs</span>
                        <span className='text-[hsl(236,100%,87%)] text-sm'>Last Week - 36hrs</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards