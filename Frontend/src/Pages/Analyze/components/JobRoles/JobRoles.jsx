import {
    Monitor,
    Star,
    ArrowUpRight,
    Code2
} from 'lucide-react'
import React from 'react'
import JobRolesRecommendation from './JobRolesRecommendation'

const JobRoles = () => {



    return (
        <section className='jobRoles_container w-full mt-5 p-2  rounded-2xl shadow-sm'>

            <div className='jobRoles_wrapper w-full p-6  border border-gray-200'>

                {/* Header */}
                <div className='flex items-center gap-4'>

                    <div className='p-3 bg-gray-100 text-gray-600 rounded-xl'>
                        <Star size={24} />
                    </div>

                    <div>

                        <h1 className='text-lg font-semibold text-gray-800 uppercase'>
                            Recommended Job Roles
                        </h1>

                        <p className='text-sm text-gray-500 mt-1'>
                            Based on your skills, experience and job match analysis.
                        </p>

                    </div>

                </div>


                {/* Job Roles */}
                <JobRolesRecommendation />

            </div >

        </section >
    )
}

export default JobRoles