import {
    BriefcaseBusiness,
    Target,
    TargetIcon
} from 'lucide-react'
import JobMissingKeywords from './JobMissingKeywords'
import JobMatchScore from './JobMatchScore'
import JobBottonAnalysis from './JobBottonAnalysis'

const JobMatch = ({ value = 75 }) => {

    return (
        <section className='jobMatch_container w-full mt-10 p-2 rounded-2xl shadow-lg'>

            <div className='jobMatch_wrapper w-full p-6  '>

                {/* Header */}
                <div className='jobMatch_header flex items-center gap-4'>

                    <div className='p-3 bg-gray-100 rounded-xl text-gray-600'>
                        <Target size={24} />
                    </div>

                    <div>
                        <h1 className='text-lg font-semibold uppercase text-gray-800'>
                            Job Match
                        </h1>

                        <p className='text-sm text-gray-500 mt-1'>
                            See how well your resume matches the target job and what's missing.
                        </p>
                    </div>

                </div>


                {/* Body */}
                <div className='jobMatch_body grid grid-cols-1 lg:grid-cols-3 gap-5 mt-6'>

                    {/* Job Overview */}
                    <div className='lg:col-span-2 p-5 border border-gray-200 rounded-xl'>

                        <h2 className='text-base font-semibold text-gray-800'>
                            Job Match Overview
                        </h2>


                        {/* Target Job */}
                        <div className='flex items-center gap-3 mt-5 p-4 bg-gray-50 border border-gray-200 rounded-xl'>

                            <div className='p-3 bg-gray-200 rounded-lg text-gray-600'>
                                <BriefcaseBusiness size={24} />
                            </div>

                            <div>
                                <p className='text-xs text-gray-500'>
                                    Target Job Role
                                </p>

                                <strong className='text-sm text-gray-800'>
                                    Full Stack Developer
                                </strong>
                            </div>

                        </div>


                        {/* What This Means */}
                        <div className='mt-5 p-4 bg-gray-50 border border-gray-200 rounded-xl'>

                            <div className='flex gap-3'>

                                <div className='shrink-0 p-2  bg-gray-200 rounded-lg  text-gray-600'>
                                    <TargetIcon size={22} />
                                </div>

                                <div className=''>

                                    <h3 className='text-sm font-semibold text-gray-800'>
                                        What This Means
                                    </h3>

                                    <p className='text-sm text-gray-500 leading-6 mt-1'>
                                        Your skills and experience align well with
                                        the job requirements. Focus on adding missing
                                        keywords and strengthening your project details
                                        to improve your match score.
                                    </p>

                                </div>

                            </div>

                        </div>


                        {/* Missing Keywords */}
                        <JobMissingKeywords />

                    </div>


                    {/* Match Score */}
                    <JobMatchScore value={value} />

                </div>


                {/* Bottom Insights */}
                <JobBottonAnalysis />
            </div>

        </section>
    )
}

export default JobMatch