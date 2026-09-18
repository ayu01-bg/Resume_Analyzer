import {
    AlertTriangle,
    CheckCircle2,
    Lightbulb,
    MoveRight,
    X
} from 'lucide-react'
import React from 'react'

const RedFlags = () => {

    const strengths = [
        'Missing Linkedin profile',
        'Limited quantative achievements',
    ]

    return (
        <div className='w-full lg:w-90 p-5 border bg-white/50 border-gray-200 rounded-2xl shadow-sm'>

            {/* Header */}

            <div className='flex items-center gap-3'>

                <div className='py-3 bg-gray-100 text-gray-600 rounded-xl'>
                    <AlertTriangle size={22} />
                </div>

                <div>
                    <h2 className='text-xl lg:text-lg font-semibold text-gray-800'>
                        Red Flags
                    </h2>

                </div>

            </div>


            {/* Strengths List */}
            <div className='mt-5'>

                <ul className='space-y-3'>

                    {strengths.map((strength, index) => (

                        <li
                            key={index}
                            className='flex items-start gap-3 text-md lg:text-sm text-gray-600'
                        >

                            <X
                                color='red'
                                size={18}
                                className='shrink-0 mt-0.5 text-gray-600'
                            />

                            <span>
                                {strength}
                            </span>

                        </li>

                    ))}

                </ul>

            </div>

        </div>
    )
}

export default RedFlags