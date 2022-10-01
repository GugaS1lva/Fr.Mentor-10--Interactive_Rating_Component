import React, { useState } from 'react'
import Image from 'next/image'
import Jeremy from '../../../public/images/image-jeremy.png'

import { currentDaily } from '../../../pages/api'
import { previousDaily } from '../../../pages/api'
import { currentWeekly } from '../../../pages/api'
import { previousWeekly } from '../../../pages/api'
import { currentMonthly } from '../../../pages/api'
import { previousMonthly } from '../../../pages/api'


// import { useState } from 'react'

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

{/* <div className='bg-green-900 text-white w-[300px] '>
<h3>Current:{data}</h3>
<br />
<h3>Last Week: {data2}</h3>
</div>
<button onClick={() => switchToDailyView()}>Alternar para exibição diária</button> <br />
<button onClick={() => switchToWeeklyView()}>Alternar para exibição semanal</button> <br />
<button onClick={() => switchToMonthlyView()}>Alternar para exibição mensal</button> <br /> */}

const ProfileCard = () => {
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

    return (
        <>
            <div>
                <div className='bg-[hsl(246,80%,60%)] rounded-xl flex justify-between items-center p-6 relative'>
                    <div className='max-w-[70px] max-h-[70px] border-white border-4 rounded-full'>
                        <Image
                            className=""
                            src={Jeremy}
                            width={234}
                            height={234}
                            alt={"Profile-Image"}
                        ></Image>
                    </div>

                    <div className='flex flex-col ml-4'>
                        <span className='text-[hsl(236,100%,87%)]'>Report for</span>
                        <strong className='font-light text-xl'>Jeremy Robson</strong>
                    </div>
                </div>

                <div className='bg-[hsl(235,46%,20%)] text-[hsl(235,45%,61%)] h-[90px] p-5 -mt-5 flex items-end justify-center rounded-xl'>
                    <button className='px-2 mr-2 hover:text-white transition' onClick={() => switchToDailyView()}>Daily</button>
                    <button className='px-2 mx-3 hover:text-white transition' onClick={() => switchToWeeklyView()}>Weekly</button>
                    <button className='px-2 ml-2 hover:text-white transition' onClick={() => switchToMonthlyView()}>Monthly</button>
                </div>
            </div>
            {/* ========================== */}
            {/* <div className='bg-green-900 text-white w-[300px] '>
                <h3>Current:{data}</h3>
                <br />
                <h3>Last Week: {data2}</h3>
            </div> */}
        </>
    )
}

export default ProfileCard