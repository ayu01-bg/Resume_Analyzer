import React from 'react'
import MainSection from './sections/mainSection'
import SliderSection from './sections/sliderSection'
import ProcessGuide from './sections/processGuide'
import InsightsAnalyzer from './sections/insightsAnalyzer'
import WhyAnalyzer from './sections/whyAnalyzer'
import AnalyzeResume from './sections/analyzeResume'

const Home = () => {
    return (
        <>
            <MainSection />

            <SliderSection />

            <ProcessGuide />

            <InsightsAnalyzer/>

            <WhyAnalyzer/>

            <AnalyzeResume/>
            
        </>
    )
}

export default Home