import {
    Braces,
    Layers,
    Wrench,
    UsersRound,
    Code2
} from 'lucide-react'
import React from 'react'

const SkillsAnalysis = () => {



    const skillsAnalysisData = [
        {
            icon: Braces,
            title: 'Programming Languages',
            items: [
                'JavaScript',
                'PHP'
            ],
           
        },
        {
            icon: Layers,
            title: 'Frameworks',
            items: [
                'React',
                'Node.js',
                'Express'
            ],
           
        },
        {
            icon: Wrench,
            title: 'Tools',
            items: [
                'Git',
                'GitHub',
                'VS Code'
            ],
           
        },
        {
            icon: UsersRound,
            title: 'Soft Skills',
            items: [
                'Communication',
                'Problem Solving',
                'Teamwork'
            ],
           
        }
    ]

    return (
        <section className='skillsAnalysis_container w-full flex  gap-6 py-2 mt-10 shadow-lg rounded-lg'>

            <div className='skillsAnalysis_wrapper py-2 w-full flex flex-col '>

                <div className='flex w-full px-3 justify-between'>

                    <div className="flex items-center gap-4">

                        <span className=' p-2 bg-blue-400/40 rounded-full'>
                            <Code2 color='blue' />
                        </span>

                        <h1 className=' uppercase'>
                            Skills Analysis
                        </h1>
                    </div>

                    <div className=' flex items-center bg-blue-300 text-blue-600 px-2 py-1 rounded-full'>
                        <span >Skills Score:</span>
                        <span>71</span>
                    </div>

                </div>

                <div className=' flex mt-2'>
                    {skillsAnalysisData.map((rw, i) => {
                        const Icon = rw.icon
                        return (

                            <div className='flex flex-col gap-5  border-e-2 border-gray-400 p-3 w-full lg:w-1/4' key={i}>

                                <div className='flex items-center gap-3'>
                                    <span className='p-2 bg-white rounded-lg '>
                                        <Icon />
                                    </span>
                                    Programming Language
                                </div>


                                <div className='flex gap-2 flex-wrap' >
                                    {rw.items.map((item, i) => (
                                        <span className='text-sm px-4 py-2 whitespace-nowrap bg-white rounded-full' key={i}>
                                            {item}
                                        </span>
                                    ))}
                                </div>

                            </div>

                        )
                    })}
                </div>

            </div>

        </section >
    )
}

export default SkillsAnalysis