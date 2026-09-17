import fileIcon from '../../../../assets/Icons/fileIcon.png'
import React from 'react'
import ContentMetrics from './ContentMetrics'

const ContentAnalysis = ({ value = 75 }) => {

    const radius = 45
    const circumference = 2 * Math.PI * radius
    const offset = circumference - (value / 100) * circumference

    return (
        <section className=' contentAnalysis_container w-full flex flex-col lg:flex-row gap-6 p-2 mt-10 shadow-lg rounded-lg'>

            <div className="contentAnalysis_wrapper relative p-6 w-full lg:w-1/3 rounded-2xl flex flex-col justify-center">

                <div className=' w-full'>

                    <div className=' flex justify-center items-center gap-3'>

                        <span className=' p-2 bg-blue-400/20 rounded-full'>
                            <img src={fileIcon} width={30} alt="" />
                        </span>

                        <h2 className=' text-xl font-semibold text-gray-800'>
                            Content Quality
                        </h2>

                    </div>

                </div>

                <div className=' relative mt-6 flex flex-col justify-center items-center'>

                    <svg
                        className=' w-50 h-50 -rotate-90' viewBox='0 0 100 100'
                    >
                        <circle
                            cx='50'
                            cy='50'
                            r={radius}
                            fill='none'
                            stroke="gray"
                            strokeWidth='8'
                            className='text-gray-200'
                        />

                        <circle
                            cx='50'
                            cy='50'
                            r={radius}
                            fill='none'
                            stroke='black'
                            strokeWidth='8'
                            strokeLinecap='round'
                            className=' text-slate-700'
                            strokeDasharray={circumference}
                            strokeDashoffset={offset}
                        />
                    </svg>

                    <div className='absolute -top-15 inset-0 flex flex-col items-center justify-center  '>

                        <span className='text-5xl font-bold text-gray-800'>
                            {value}
                        </span>

                        <span className=' text-sm text-gray-400 font-medium'>
                            /100
                        </span>

                    </div>

                    <div className="flex items-center gap-2 
                                mt-5 px-4 py-2 
                                rounded-full 
                                bg-gray-100 
                                text-gray-700">


                        <span className="text-sm font-medium">
                            Good Content foundatio
                        </span>

                    </div>

                </div>

            </div>

            <div className=' w-full lg:w-2/3'>
                <ContentMetrics />
            </div>

        </section>
    )
}

export default ContentAnalysis