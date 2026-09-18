import { ShieldAlert } from 'lucide-react'
import React from 'react'
import ATSMetrics from './ATSMetrics'

const AtsCompatibility = () => {
  return (
    <section className='atsCompatibility_container p-2 mt-5 rounded-lg shadow-lg' >

      <div className='atsCompatibility_wrapper flex justify-between items-center'>

        <div className=' flex items-center gap-2'>

          <span className=' bg-white/60 rounded-lg p-2'>
            <ShieldAlert />
          </span>

          <h1>ATS Compatibility</h1>

        </div>

        <div className='p-2 rounded-lg bg-white/60'>
          <span className=' text-green-400'> 82 </span>/ 100
        </div>

      </div>

      <ATSMetrics />

      
    </section>
  )
}

export default AtsCompatibility