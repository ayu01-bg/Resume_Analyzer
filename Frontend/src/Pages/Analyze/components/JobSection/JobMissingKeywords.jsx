import React from 'react'

const JobMissingKeywords = () => {
    return (
        <div className='mt-5'>

            <h3 className='text-sm font-semibold text-gray-800 mb-3'>
                Missing Keywords
            </h3>

            <div className='flex flex-wrap gap-2'>

                <span className='px-3 py-1.5 text-xs bg-gray-100 border border-gray-200 rounded-full text-gray-600'>
                    REST API
                </span>

                <span className='px-3 py-1.5 text-xs bg-gray-100 border border-gray-200 rounded-full text-gray-600'>
                    Docker
                </span>

                <span className='px-3 py-1.5 text-xs bg-gray-100 border border-gray-200 rounded-full text-gray-600'>
                    TypeScript
                </span>

            </div>

        </div>
    )
}

export default JobMissingKeywords