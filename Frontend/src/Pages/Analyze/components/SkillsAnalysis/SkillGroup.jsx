import React from 'react'
import {
    Braces,
    Layers,
    Wrench,
    UsersRound,
} from 'lucide-react'

const SkillGroup = () => {

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
        <div className=' flex mt-2'>
            {skillsAnalysisData.map((rw, i) => {
                const Icon = rw.icon
                return (

                    <div className='flex flex-col gap-5  border-e border-gray-300 p-3 w-full lg:w-1/4' key={i}>

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
        </div>)
}

export default SkillGroup