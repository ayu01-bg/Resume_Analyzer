import React from 'react'
import { FileText } from 'lucide-react'
import { FaCopyright, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
const Footer = () => {
    return (
        <section className=' p-2 mt-12 bg-gray-600/80'>

            <div className=' grid grid-1 grid-cols-3 p-3'>

                <div className='px-3 pb-8'>
                    <div className=' flex gap-1 py-2 text-xl'>
                        <span>
                            <FileText />
                        </span>
                        Analyzer
                    </div>

                    <p className=' text-white text-xs'>AI-powered resume analysis to help you understand and improve your professional profile.</p>

                </div>

                <div className=' flex justify-around'>

                    <div className=' flex flex-col'>
                        <h1>Product</h1>
                        <span className=' text-gray-300'>Features</span>
                        <span className=' text-gray-300'>Analyze</span>
                    </div>

                    <div className=' flex flex-col'>
                        <h1>Company</h1>
                        <span className=' text-gray-300'>Contact</span>
                    </div>

                </div>

                <div className=' flex flex-col gap-2 items-end'>
                    <div className=' flex items-top gap-4'>
                        <a
                            href="mailto:thakuraayush5y9@gmail.com"
                            target='_blank'
                        >
                            <FaEnvelope size='24' />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/ayush-thakur-8b4372288"
                            target='_blank'
                        >
                            <FaLinkedin size="24" />
                        </a>

                        <a
                            href="https://github.com/ayu01-bg/Resume_Analyzer.git"
                            target='_blank'
                        >
                            <FaGithub size='24' />
                        </a>
                    </div>

                    <p className=' flex items-center text-sm'>
                        <FaCopyright />
                        2026 Analyzer. All rights reserved
                    </p>

                </div>

            </div>

        </section>
    )
}

export default Footer