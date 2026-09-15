import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../../Contents/contentData'

const WhyAnalyzer = () => {

    const { whyAnalyzeData } = useContext(AppContext)

    return (
        <section className='w-full p-2 mt-10  '>

            <div className='py-4 ps-4'>
                <strong className=' text-4xl bg-linear-to-r from-blue-500 via-purple-600 to-pink-600 bg-clip-text text-transparent'>Why Analyzer</strong>
                <hr className=' border-gray-300' />
            </div>

            <div className='flex p-2 flex-col lg:flex-row rounded-lg bg-gray-100/20 py-5 shadow-xl'>

                <div className='w-full lg:w-1/3  p-2'>
                    <p className=' text-3xl'>Stop guessing what is </p>
                    <p className='text-3xl bg-linear-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent'>wrong with your resume.</p>
                </div>

                <div className=' w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-4'>

                    {whyAnalyzeData.map((rw, i) => {

                        const Icon = rw.icon

                        return (

                            <div
                                className='flex flex-col justify-around p-5 min-h-70 bg-mist-100/40 shadow-lg rounded-lg'
                                key={i}
                            >

                                <span className=' inline-fit bg-gray-200/50 p-2 rounded-full'>

                                    <Icon size='30px' />
                                </span>

                                <h1 className=' text-lg'>{rw.title}</h1>

                                <p className=' text-gray-400'>{rw.description}</p>

                            </div>
                        )
                    })}

                </div>

            </div>
        </section>
    )
}

export default WhyAnalyzer