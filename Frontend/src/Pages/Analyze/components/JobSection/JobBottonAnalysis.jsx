import { AlertCircle, CheckCircle2 } from 'lucide-react'
import React from 'react'

const JobBottonAnalysis = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5'>

            <div className='p-4 border border-gray-300 rounded-xl shadow-sm'>

                <div className='flex items-center gap-2 mb-2'>

                    <CheckCircle2
                        size={18}
                        className='text-gray-600'
                    />

                    <h3 className='text-sm font-semibold text-gray-800'>
                        Matching Skills
                    </h3>

                </div>

                <p className='text-sm text-gray-500'>
                    JavaScript, React, Node.js, Express and MongoDB
                    match the target role requirements.
                </p>

            </div>


            <div className='p-4 border border-gray-300 rounded-xl shadow-sm'>

                <div className='flex items-center gap-2 mb-2'>

                    <AlertCircle
                        size={18}
                        className='text-gray-600'
                    />

                    <h3 className='text-sm font-semibold text-gray-800'>
                        Areas to Improve
                    </h3>

                </div>

                <p className='text-sm text-gray-500'>
                    Add relevant keywords and provide more measurable
                    details about your projects and experience.
                </p>

            </div>

        </div>

    )
}

export default JobBottonAnalysis