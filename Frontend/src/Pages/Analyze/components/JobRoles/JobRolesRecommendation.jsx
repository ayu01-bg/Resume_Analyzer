import { Code2, Monitor } from 'lucide-react'
import React from 'react'

const JobRolesRecommendation = () => {

    const jobRoles = [
        {
            icon: Monitor,
            title: 'Full Stack Developer',
            score: 82
        },
        {
            icon: Code2,
            title: 'Frontend Developer',
            score: 78
        },
        {
            title: 'Backend Developer',
            score: 74
        }
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6'>

            {jobRoles.map((role, index) => {
                const Icon = role.icon
                return (
                    < div
                        key={index}
                        className='group px-2 py-3 border rounded-xl border-gray-300/30 bg-white/50 hover:shadow-sm transition-all duration-200'
                    >

                        {/* Top */}
                        <div className='flex items-start justify-between gap-3' >

                            <div className='flex items-center gap-3'>

                                <div className='p-3 bg-gray-100 text-gray-600 rounded-lg'>
                                    <Monitor />
                                </div>

                                <div>

                                    <h2 className='text-sm font-semibold text-gray-800'>
                                        {role.title}
                                    </h2>

                                    <p className='text-xs text-gray-400 mt-1'>
                                        Recommended role
                                    </p>

                                </div>

                            </div>


                        </div>


                        {/* Match Score */}
                        <div className='mt-5'>

                            <div className='flex items-center justify-between mb-2'>

                                <span className='text-xs text-gray-500'>
                                    Match Score
                                </span>

                                <span className='text-sm font-semibold text-gray-700'>
                                    {role.score}%
                                </span>

                            </div>


                            {/* Progress */}
                            <div className='w-full h-2 bg-gray-200 rounded-full overflow-hidden'>

                                <div
                                    className='h-full bg-slate-700 rounded-full transition-all duration-500'
                                    style={{
                                        width: `${role.score}%`
                                    }}
                                />

                            </div>

                        </div>

                    </div>
                )
            })
            }

        </div>)
}

export default JobRolesRecommendation