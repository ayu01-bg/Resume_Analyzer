import React from 'react'
import LandingPage from './Pages/Home/mainSection'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <section className='bg-linear-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 pb-3'>
      <header>
        <Navbar />
      </header>


      <main className='landing-section min-h-screen px-6 lg:px-10 lg:py-2 text-[#424242] '>

        <LandingPage />

      </main>


      <footer>

      </footer>

    </section>
  )
}

export default App