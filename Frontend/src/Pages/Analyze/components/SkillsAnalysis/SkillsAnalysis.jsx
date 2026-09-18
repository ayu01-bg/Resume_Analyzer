import { Code2 } from 'lucide-react'
import React from 'react'
import SkillGroup from './SkillGroup'

const SkillsAnalysis = () => {

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

                <SkillGroup />

            </div>

        </section >
    )
}

export default SkillsAnalysis