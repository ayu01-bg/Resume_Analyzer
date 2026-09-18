import { FileText } from 'lucide-react'
import React from 'react'

const FinalSummary = () => {
    return (
        <section className='finalSummary_container w-full mt-5 p-2 bg-white/50 rounded-2xl shadow-sm'>

            <div className='finalSummary_wrapper w-full flex flex-col justify-between gap-2 py-2 px-4'>

                <div className=' py-2 flex items-center gap-2 border-b border-gray-400/60'>
                    <span className=' p-2 bg-white rounded-xl'>
                        <FileText size={25} />
                    </span>
                    <h1 className=' text-xl'>Final Summary</h1>
                </div>

                <div className=' py-2'>
                    <p className=' text-gray-500'>
                        Your Resume shows a good foundation with relevant education, skills and projects. With a few improvements like adding qualified achievements, professional links and stronger bullet points, you can significantly increase your chances of getting shortlisted for your desired role.
                    </p>
                </div>

            </div>


        </section>
    )
}

export default FinalSummary