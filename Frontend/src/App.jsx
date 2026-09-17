import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './Pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import AnalyzeResult from './Pages/Analyze/AnalyzeResult'

const App = () => {
  return (
    <section className='bg-linear-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20'>
      <header>
        <Navbar />
      </header>



      <main className='landing-section min-h-screen px-6 lg:px-10 lg:py-2 text-[#424242] '>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/analyzeResult' element={<AnalyzeResult />} />
        </Routes>

      </main>


      <footer>
        <Footer />
      </footer>

    </section>
  )
}

export default App