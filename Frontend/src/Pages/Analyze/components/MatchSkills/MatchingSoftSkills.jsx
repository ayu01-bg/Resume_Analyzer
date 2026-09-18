import { Code2 } from 'lucide-react'
import React from 'react'

const MatchingSoftSkills = () => {
    return (
        <div className=' w-1/2 hardSkills_wrapper' >

            <div className=' flex flex-col p-3 inset-shadow-sm rounded-lg border border-gray-300/30'>

                <div className=' px-2 flex justify-between border-b border-gray-400/30 w-full '>
                    <div className=' flex items-center gap-3 '>

                        <div className='flex h-15 py-2'>
                            <span className=' p-2 bg-blue-500/20 rounded-xl'>
                                <Code2 size={25} />
                            </span>
                        </div>

                        <div className='  flex flex-col justify-center'>
                            <span className=' text-lg'>Soft Skills Match</span>
                            <p className=' text-sm text-gray-500'>Interpersonal and workplace skills.</p>
                        </div>
                    </div>

                    <div className=' p-2'>

                        <div className='flex items-center gap-2'>
                            <span className='w-3 h-3 rounded-full bg-red-400/60'></span>
                            <p className=' text-xs'>Unmatched</p>
                        </div>

                        <div className='flex items-center gap-2'>
                            <span className='w-3 h-3 rounded-full bg-green-400/60'></span>
                            <p className=' text-xs'>Matched</p>
                        </div>

                        <div className='flex items-center gap-2'>
                            <span className='w-3 h-3 rounded-full bg-orange-400/60'></span>
                            <p className=' text-xs'>Partial</p>
                        </div>

                    </div>
                </div>

                <div className=' mt-5 px-2'>

                    <div className=' inline-flex items-center gap-2 p-2 bg-white/50 rounded-full shadow-lg'>
                        <span className=' w-3 h-3  bg-green-400/60 rounded-xl'></span>
                        Communication
                    </div>

                </div>

            </div>

        </div>)
}

export default MatchingSoftSkills