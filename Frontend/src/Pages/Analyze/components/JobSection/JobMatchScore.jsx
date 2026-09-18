import { CheckCircle2 } from 'lucide-react'
import React from 'react'

const JobMatchScore = ({value}) => {
  return (
       <div className='p-5 border bg-white/40 border-gray-200 rounded-xl flex flex-col items-center justify-center'>

                        <h2 className='text-base font-semibold text-gray-800'>
                            Match Score
                        </h2>

                        {/* Circular Score */}
                        <div className='relative w-50 h-50 mt-5'>

                            <svg
                                className='w-full h-full -rotate-90'
                                viewBox='0 0 100 100'
                            >

                                {/* Background */}
                                <circle
                                    cx='50'
                                    cy='50'
                                    r='42'
                                    fill='none'
                                    stroke='currentColor'
                                    strokeWidth='8'
                                    className='text-gray-200'
                                />

                                {/* Progress */}
                                <circle
                                    cx='50'
                                    cy='50'
                                    r='42'
                                    fill='none'
                                    stroke='currentColor'
                                    strokeWidth='8'
                                    strokeLinecap='round'
                                    strokeDasharray={2 * Math.PI * 42}
                                    strokeDashoffset={
                                        2 * Math.PI * 42 -
                                        (value / 100) * (2 * Math.PI * 42)
                                    }
                                    className='text-slate-700'
                                />

                            </svg>

                            <div className='absolute inset-0 flex flex-col items-center justify-center'>

                                <strong className='text-3xl font-bold text-gray-800'>
                                    {value}%
                                </strong>

                                <span className='text-xs text-gray-500'>
                                    Match
                                </span>

                            </div>

                        </div>


                        {/* Status */}
                        <div className='flex items-center gap-2 mt-4 px-3 py-1.5 bg-gray-100 rounded-full'>

                            <CheckCircle2
                                size={15}
                                className='text-gray-600'
                            />

                            <span className='text-xs font-medium text-gray-600'>
                                Good Match
                            </span>

                        </div>

                    </div>  )
}

export default JobMatchScore