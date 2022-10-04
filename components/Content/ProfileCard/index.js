import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Jeremy from '../../../public/images/image-jeremy.png'
import Cards from '../Cards'

import { currentDaily } from '../../../pages/api'
import { previousDaily } from '../../../pages/api'
import { currentWeekly } from '../../../pages/api'
import { previousWeekly } from '../../../pages/api'
import { currentMonthly } from '../../../pages/api'
import { previousMonthly } from '../../../pages/api'

const ProfileCard = () => {
    const [currentData, setCurrentData] = useState(currentWeekly)
    const [previousData, setPreviousData] = useState(previousWeekly)
    const [view, setView] = useState('weekly')

    const switchToDailyView = () => {
        setCurrentData(currentDaily)
        setPreviousData(previousDaily)
        setView('daily')
    }
    const switchToWeeklyView = () => {
        setCurrentData(currentWeekly)
        setPreviousData(previousWeekly)
        setView('weekly')
    }
    const switchToMonthlyView = () => {
        setCurrentData(currentMonthly)
        setPreviousData(previousMonthly)
        setView('monthly')
    }

    return (    
        <>
            <div>
                <div className='bg-[hsl(246,80%,60%)] rounded-xl flex justify-between items-center p-6 relative sm:flex-col sm:items-start sm:h-[270px] sm:w-[190px]'>
                    <div className='max-w-[70px] max-h-[70px] border-white border-4 rounded-full'>
                        <Image
                            className=""
                            src={Jeremy}
                            width={234}
                            height={234}
                            alt={"Profile-Image"}
                        ></Image>
                    </div>

                    <div className='flex flex-col ml-4 sm:m-0 sm:pb-[30px]'>
                        <span className='text-[hsl(236,100%,87%)]'>Report for</span>
                        <strong className='font-light text-xl sm:text-3xl sm:w-[105px]'>Jeremy Robson</strong>
                    </div>
                </div>

                <div className='bg-[hsl(235,46%,20%)] text-[hsl(235,45%,61%)] h-[90px] p-5 -mt-5 flex items-end justify-center rounded-xl sm:flex-col sm:items-start sm:h-[133px] sm:p-4'>
                    <button className={`px-2 mr-2 sm:mx-0 sm:py-1 sm:mt-6 hover:text-white transition ${view === 'daily' ? 'text-white' : ''}`} onClick={() => switchToDailyView()}>Daily</button>
                    <button className={`px-2 mx-3 sm:mx-0 sm:py-1 hover:text-white transition ${view === 'weekly' ? 'text-white' : ''}`} onClick={() => switchToWeeklyView()}>Weekly</button>
                    <button className={`px-2 ml-2 sm:mx-0 sm:py-1 hover:text-white transition ${view === 'monthly' ? 'text-white' : ''}`} onClick={() => switchToMonthlyView()}>Monthly</button>
                </div>
            </div>
            <Cards data={[currentData, previousData]}></Cards>
        </>
    )
}

export default ProfileCard