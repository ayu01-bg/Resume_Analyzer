import { Clock, FileText } from 'lucide-react'
import fileIcon from '../../../../assets/Icons/fileIcon.png'
import pdfIcon from '../../../../assets/Icons/pdfIcon.png'
import React from 'react'

const ResultHeader = () => {
    return (
        <>

            <section className=' p-2 resultHeader_container shadow-lg rounded-lg mt-5 '>

                <div className=' resultHeade-wrapper p-2 '>

                    <div className=' flex items-center'>
                        <div className='p-2'>
                            {/* <FileText color='white' size='50' /> */}
                            <img src={fileIcon} />
                        </div>

                        <div className='p-3'>
                            <strong className='text-4xl my-5'>
                                Resume Analysis
                            </strong>
                            <p className=' text-gray-500/80'>Here' You can see the how the resume performs</p>
                        </div>
                    </div>

                    <div className=' p-3 flex justify-between bg-white/70 rounded-lg'>
                        <div className=' flex gap-3 w-2/4'>
                            <span>
                                <img src={pdfIcon} alt="" />
                            </span>

                            <div className=' '>
                                <h3>Aayush_resume.pdf</h3>
                                <p>PDF. 2.4 MB</p>
                            </div>
                        </div>

                        <div className=' flex items-center justify-end pe-5 w-2/4 gap-2 whitespace-nowrap'>
                            <Clock />
                            Analyzed just now
                        </div>
                    </div>

                </div>

            </section>

        </>

    )
}

export default ResultHeader