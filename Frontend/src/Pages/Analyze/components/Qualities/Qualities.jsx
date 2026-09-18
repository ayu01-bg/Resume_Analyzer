import React from 'react'
import Strength from './Strength'
import Weakness from './Weakness'
import Improvements from './Improvements'
import RedFlags from './RedFlags'

const Qualities = () => {
    return (
        <section className='qualities_container w-full mt-5 p-2  rounded-2xl shadow-sm'>

            <div className='qualities_wrapper w-full flex flex-col lg:flex-row justify-between gap-2 py-2 px-4  border border-gray-200'>

                <Strength />

                <Weakness />

                <Improvements />

                <RedFlags />

            </div>

        </section>
    )
}

export default Qualities