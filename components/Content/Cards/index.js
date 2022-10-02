import Image from 'next/image'
import React from 'react'

import WorkIcon from '../../../public/images/icon-work.svg'
import PlayIcon from '../../../public/images/icon-play.svg'
import StudyIcon from '../../../public/images/icon-study.svg'
import ExerciseIcon from '../../../public/images/icon-exercise.svg'
import SocialIcon from '../../../public/images/icon-social.svg'
import SelfCareIcon from '../../../public/images/icon-self-care.svg'

import { titles } from '../../../pages/api'

const Cards = ({ data }) => {
    return (
        <div className='flex flex-col sm:flex-row sm:items-start sm:justify-start sm:w-[450px] sm:flex-wrap md:w-[680px]'>
            <div className='mb-[100px] mt-[25px] sm:w-[200px] sm:mt-0 sm:ml-[25px] sm:mb-[125px]'>
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

                <div className='bg-[hsl(235,46%,20%)] hover:bg-[hsl(235,45%,31%)] hover:cursor-pointer transition px-5 py-6  rounded-xl -mt-8 absolute w-[276px] sm:w-[200px]'>
                    <div className='flex justify-between'>
                        <span className='font-medium'>{titles[0]}</span>
                        <span className='text-[hsl(236,100%,87%)] hover:text-white hover:cursor-pointer transition text-xl'>•••</span>
                    </div>

                    <div className='flex items-center justify-between sm:flex-col sm:items-start'>
                        <span className='font-light text-3xl flex sm:text-4xl'>{(data === undefined ? '' : data[0][0])}hrs</span>
                        <span className='text-[hsl(236,100%,87%)] text-sm flex sm:text-xs'>Last Week -&nbsp;{(data === undefined ? '' : data[1][0])}hrs</span>
                    </div>
                </div>
            </div>

            <div className='mb-[100px] mt-[5px] sm:w-[200px] sm:mt-0 sm:ml-[25px] sm:mb-[125px]'>
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

                <div className='bg-[hsl(235,46%,20%)] hover:bg-[hsl(235,45%,31%)] hover:cursor-pointer transition px-5 py-6  rounded-xl -mt-8 absolute w-[276px] sm:w-[200px]'>
                    <div className='flex justify-between'>
                        <span className='font-medium'>{titles[1]}</span>
                        <span className='text-[hsl(236,100%,87%)] hover:text-white hover:cursor-pointer transition text-xl'>•••</span>
                    </div>

                    <div className='flex items-center justify-between sm:flex-col sm:items-start'>
                        <span className='font-light text-3xl flex sm:text-4xl'>{(data === undefined ? '' : data[0][1])}hrs</span>
                        <span className='text-[hsl(236,100%,87%)] text-sm flex sm:text-xs'>Last Week -&nbsp;{(data === undefined ? '' : data[1][1])}hrs</span>
                    </div>
                </div>
            </div>

            <div className='mb-[100px] mt-[5px] sm:w-[200px] sm:mt-0 sm:ml-[25px] sm:mb-[125px]'>
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

                <div className='bg-[hsl(235,46%,20%)] hover:bg-[hsl(235,45%,31%)] hover:cursor-pointer transition px-5 py-6  rounded-xl -mt-8 absolute w-[276px] sm:w-[200px]'>
                    <div className='flex justify-between'>
                        <span className='font-medium'>{titles[2]}</span>
                        <span className='text-[hsl(236,100%,87%)] hover:text-white hover:cursor-pointer transition text-xl'>•••</span>
                    </div>

                    <div className='flex items-center justify-between sm:flex-col sm:items-start'>
                        <span className='font-light text-3xl flex sm:text-4xl'>{(data === undefined ? '' : data[0][2])}hrs</span>
                        <span className='text-[hsl(236,100%,87%)] text-sm flex sm:text-xs'>Last Week -&nbsp;{(data === undefined ? '' : data[1][2])}hrs</span>
                    </div>
                </div>
            </div>

            <div className='mb-[100px] mt-[5px] sm:w-[200px] sm:mt-0 sm:ml-[25px] sm:mb-[125px]'>
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

                <div className='bg-[hsl(235,46%,20%)] hover:bg-[hsl(235,45%,31%)] hover:cursor-pointer transition px-5 py-6  rounded-xl -mt-8 absolute w-[276px] sm:w-[200px]'>
                    <div className='flex justify-between'>
                        <span className='font-medium'>{titles[3]}</span>
                        <span className='text-[hsl(236,100%,87%)] hover:text-white hover:cursor-pointer transition text-xl'>•••</span>
                    </div>

                    <div className='flex items-center justify-between sm:flex-col sm:items-start'>
                        <span className='font-light text-3xl flex sm:text-4xl'>{(data === undefined ? '' : data[0][3])}hrs</span>
                        <span className='text-[hsl(236,100%,87%)] text-sm flex sm:text-xs'>Last Week -&nbsp;{(data === undefined ? '' : data[1][3])}hrs</span>
                    </div>
                </div>
            </div>

            <div className='mb-[100px] mt-[5px] sm:w-[200px] sm:mt-0 sm:ml-[25px] sm:mb-[125px]'>
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

                <div className='bg-[hsl(235,46%,20%)] hover:bg-[hsl(235,45%,31%)] hover:cursor-pointer transition px-5 py-6  rounded-xl -mt-8 absolute w-[276px] sm:w-[200px]'>
                    <div className='flex justify-between'>
                        <span className='font-medium'>{titles[4]}</span>
                        <span className='text-[hsl(236,100%,87%)] hover:text-white hover:cursor-pointer transition text-xl'>•••</span>
                    </div>

                    <div className='flex items-center justify-between sm:flex-col sm:items-start'>
                        <span className='font-light text-3xl flex sm:text-4xl'>{(data === undefined ? '' : data[0][4])}hrs</span>
                        <span className='text-[hsl(236,100%,87%)] text-sm flex sm:text-xs'>Last Week -&nbsp;{(data === undefined ? '' : data[1][4])}hrs</span>
                    </div>
                </div>
            </div>

            <div className='mb-[100px] mt-[5px] sm:w-[200px] sm:mt-0 sm:ml-[25px] sm:mb-[125px]'>
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

                <div className='bg-[hsl(235,46%,20%)] hover:bg-[hsl(235,45%,31%)] hover:cursor-pointer transition px-5 py-6  rounded-xl -mt-8 absolute w-[276px] sm:w-[200px]'>
                    <div className='flex justify-between'>
                        <span className='font-medium'>{titles[5]}</span>
                        <span className='text-[hsl(236,100%,87%)] hover:text-white hover:cursor-pointer transition text-xl'>•••</span>
                    </div>

                    <div className='flex items-center justify-between sm:flex-col sm:items-start'>
                        <span className='font-light text-3xl flex sm:text-4xl'>{(data === undefined ? '' : data[0][5])}hrs</span>
                        <span className='text-[hsl(236,100%,87%)] text-sm flex sm:text-xs'>Last Week -&nbsp;{(data === undefined ? '' : data[1][5])}hrs</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards