import { AlertTriangle } from 'lucide-react'
import React from 'react'

const ATSIssue = () => {
    return (
        <div className=' py-2 flex w-full mt-2'>
            <div className='flex gap-3 w-1/2 border-2 border-gray-200 rounded-lg p-2 bg-linear-to-r from-red-200 to-red-100'>

                <div>
                    <AlertTriangle />
                </div>

                <div className=''>
                    <p>Missing Linkedin Profile</p>
                </div>

            </div>

            <div className='flex gap-3 w-1/2 border-2 border-gray-200 rounded-lg p-2 bg-linear-to-r from-green-200 to-green-100'>

                <div>
                    <AlertTriangle />
                </div>

                <div className=''>
                    <p>Missing Linkedin Profile</p>
                </div>

            </div>
        </div>
    )
}

export default ATSIssue