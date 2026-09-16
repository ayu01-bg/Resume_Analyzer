import { } from 'lucide-react'
import React, { useContext } from 'react'
import { AppContext } from '../../../Contents/contentData'

const ProcessGuide = () => {

  const { analyzeData } = useContext(AppContext)

  return (
    <section className=' w-full p-2 mt-15  '>

      <div className=' py-4 ps-4'>
        <strong className=' text-4xl bg-linear-to-r from-blue-500 via-purple-600 to-pink-600 bg-clip-text text-transparent'>SIMPLE PROCESS</strong>
        <hr className=' border-2 border-gray-300 w-20 ' />
      </div>

      <div className='px-2 rounded-lg py-5 shadow-sm'>

        <div className='analyze_section_info flex flex-col lg:flex-row'>

          <div className=' w-full lg:w-1/3 p-2'>

            <div className='analyze_info_img'>
              <p className=' text-3xl font-bold'>From resume to insights</p>
              <p className=' text-2xl font-bold text-gray-400'>in minutes</p>
            </div>

            <div className='analyze_info_text  pe-5 pt-5'>
              <p>No complicated setup. Upload your resume and let AI identify what is working and what needs to change.</p>
            </div>

          </div>

          <div className=' lg:w-2/3 flex flex-col gap-2 sm:flex-row justify-around'>

            {analyzeData.map((rw, i) => {

              const Icon = rw.icon;
              return (

                <div className='flex flex-col items-start px-5 py-6 w-full sm:w-70 lg:justify-around gap-2 bg-mist-100/40 shadow-lg rounded-lg relative' key={i} >

                  <span className='absolute -top-2 -left-3 p-2 w-8 h-8 rounded-full inline-flex justify-center items-center bg-gray-300/50 '>
                    {rw.id}
                  </span>

                  <span className={`inline-fit ${rw.textColor} ${rw.bgColor} text-blue-300 p-3 rounded-full`}>
                    <Icon size='30px' />
                  </span>

                  <h1 className=' text-lg'>{rw.title}</h1>

                  <p className=' text-gray-400'>{rw.description}</p>

                </div>
              )

            })}

          </div>

        </div>

      </div>
    </section>
  )
}

export default ProcessGuide