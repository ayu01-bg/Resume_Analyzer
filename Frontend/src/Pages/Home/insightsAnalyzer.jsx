import { LucideTarget } from 'lucide-react'
import React, { useContext } from 'react'
import { AppContext } from '../../Contents/contentData'

const InsightsAnalyzer = () => {

    const { insightAnalyzeData } = useContext(AppContext)

    return (
        <section className=' w-full p-2 mt-10 l'>

            <div className='py-4 ps-4'>
                <strong className=' text-4xl bg-linear-to-r from-blue-500 via-purple-600 to-pink-600 bg-clip-text text-transparent'>WHAT YOU GET</strong>
                <hr className=' border-gray-300' />
            </div>

            <div className='p-2 rounded-lg bg-gray-100/20 py-5 shadow-xl'>

                <div className='analyze_section_info flex flex-col lg:flex-row'>

                    <div className=' w-full lg:w-1/3 p-2 '>

                        <div className='analyze_info_img'>
                            <p className=' text-3xl'>Everything you need to</p>
                            <p className=' text-2xl bg-linear-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent'>understand your resume</p>
                        </div>

                        <div className='analyze_info_text pe-8 pt-5'>
                            <p>Get more than a single score. Understand exactly where your resume stands and how you can improve it.</p>
                        </div>

                    </div>


                    <div className='w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>

                        {insightAnalyzeData.map((rw, i) => {

                            const Icon = rw.icon;
                            return (


                                <div
                                    className='flex flex-col gap-3 p-4 min-h-60 bg-mist-100/40 shadow-lg rounded-lg'
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
            </div>
        </section >
    )
}

export default InsightsAnalyzer