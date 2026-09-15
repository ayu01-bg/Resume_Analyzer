import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import SliderSection from './sliderSection'
import ProcessGuide from './processGuide'
import InsightsAnalyzer from './insightsAnalyzer'
import { AppContext } from '../../Contents/contentData'
import {
    CheckCircle2,
    CircleCheck,
    Lightbulb,
    MoveRight,
    Play,
    StarIcon
} from 'lucide-react'
import WhyAnalyzer from './whyAnalyzer'
import AnalyzeResume from './analyzeResume'

const LandingPage = () => {

    const { Skills } = useContext(AppContext)

    return (
        <section className="">


            <div className="landing-container flex w-full flex-col items-center gap-10 py-4 px-5 mt-2 lg:flex-row lg:gap-12 lg:px-0">

                {/* ================= LEFT CONTENT ================= */}

                <div className="hero-content flex w-full flex-col gap-2 px-4 py-5 sm:px-5 lg:w-1/2">

                    {/* AI Badge */}
                    <div className="ai-badge">
                        <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600 shadow-sm">
                            <StarIcon size={16} fill="currentColor" />
                            AI Powered Resume Analyzer
                        </span>
                    </div>

                    {/* Hero Text */}
                    <div className="hero-text-content">

                        <p className="hero-title mb-2 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-6xl">
                            Turn your Resume Into
                        </p>

                        <p className="hero-subtitle mb-6 bg-linear-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-4xl font-bold leading-tight tracking-tight text-transparent sm:text-5xl lg:text-6xl">
                            Your Best Opportunity
                        </p>

                        <p className="hero-paragraph max-w-xl text-base leading-7 text-gray-500 sm:text-lg">
                            Get instant, AI-powered feedback on your resume.
                            Improve your skills, match with the right job and
                            increase your chances of getting hired.
                        </p>

                    </div>

                    {/* CTA */}
                    <div className="analyze-resume-button py-2 flex gap-2">

                        <NavLink
                            to="/analyze"
                            className="group inline-flex items-center gap-3 rounded-lg bg-blue-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-500/30"
                        >
                            Analyze Your Resume

                            <MoveRight
                                size={21}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </NavLink>

                        <NavLink
                            to="/analyze"
                            className="group inline-flex items-center gap-3 rounded-lg px-6 py-3 text-base font-semibold text-blue-500 shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-500/30 hover:text-white"
                        >
                            <Play />
                            How it works
                        </NavLink>

                    </div>

                    {/* Features */}
                    <div className="feature-list flex flex-wrap gap-2 pt-2">

                        <span className="feature-item inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-2 text-sm text-gray-600 shadow-sm">
                            <CircleCheck
                                size={17}
                                className="rounded-full bg-blue-500 text-white"
                            />
                            ATS Friendly
                        </span>

                        <span className="feature-item inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-2 text-sm text-gray-600 shadow-sm">
                            <CircleCheck
                                size={17}
                                className="rounded-full bg-blue-500 text-white"
                            />
                            Detailed Feedback
                        </span>

                        <span className="feature-item inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-2 text-sm text-gray-600 shadow-sm">
                            <CircleCheck
                                size={17}
                                className="rounded-full bg-blue-500 text-white"
                            />
                            Up to 4 Analyses
                        </span>

                    </div>

                </div>


                {/* ================= RIGHT PREVIEW CARD ================= */}

                <div className="hero-description-card flex w-full justify-center px-2 sm:px-2 lg:w-1/2">

                    <div className=" w-full ">

                        {/* Background Glow */}
                        <div className="absolute -inset-4 -z-10 rounded-4xl" />

                        <div className="overflow-hidden rounded-2xl border border-white/60 bg-mist-100 p-3 shadow-2xl shadow-blue-900/20 sm:p-4">

                            {/* Top Section */}
                            <div className="mb-3 flex flex-col gap-3 rounded-xl bg-white/5 sm:flex-row">

                                {/* ATS Score */}
                                <div className="flex min-h-56 w-full items-center justify-center rounded-xl bg-gray-200 sm:w-3/5">

                                    <div
                                        className=" flex h-40 w-40 items-center justify-center rounded-full"
                                        style={{
                                            background:
                                                'conic-gradient(#22d3ee 0deg 306deg, #172554 306deg 360deg)'
                                        }}
                                    >

                                        <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full bg-[#061452] shadow-inner">

                                            <span className="text-4xl font-bold text-white">
                                                85%
                                            </span>

                                            <span className="mt-1 text-xs font-medium text-blue-200">
                                                ATS Score
                                            </span>

                                        </div>

                                    </div>

                                </div>


                                {/* Match */}
                                <div className="flex w-full flex-col justify-center gap-4 rounded-xl bg-gray-300 p-2 sm:w-3/5">

                                    <div>
                                        <p className=" text-xs font-medium uppercase tracking-widest text-gray-500">
                                            Resume Analysis
                                        </p>

                                        <h1 className="text-xl font-semibold text-white">
                                            Overall Match
                                        </h1>
                                    </div>

                                    <div>
                                        <span className="inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/10 px-3 py-2 text-sm font-medium text-green-400">
                                            <CheckCircle2 size={17} />
                                            Good Fit
                                        </span>
                                    </div>

                                    <p className="text-sm leading-6 text-gray-400">
                                        Your resume is well-optimized. A few
                                        improvements can make it even stronger.
                                    </p>

                                </div>

                            </div>


                            {/* Bottom Content */}
                            <div className=" ">

                                {/* Skills */}
                                <div className="border-b border-white/10 pb-4">

                                    <div className="mb-3 flex items-center justify-between">

                                        <h1 className="text-sm font-semibold text-gray-600">
                                            Key Skills Found
                                        </h1>

                                        <span className="text-xs text-gray-500">
                                            {Skills.length} Skills
                                        </span>

                                    </div>

                                    <ul className="flex flex-wrap gap-4">

                                        {Skills.map((item, index) => (
                                            <li className="rounded-full border border-blue-400/20 bg-blue-400 px-3 py-1.5 text-sm font-medium text-blue-100" key={index}>
                                                {item}
                                            </li>
                                        ))}

                                    </ul>

                                </div>


                                {/* Suggestions */}
                                <div className="pt-4">

                                    <span className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-gray-500">
                                        <Lightbulb
                                            size={18}
                                            className="text-green-400"
                                        />
                                        Suggestions
                                    </span>

                                    <ul className="flex flex-col gap-3">

                                        <li className="flex items-start gap-2 text-sm text-gray-400">
                                            <CheckCircle2
                                                size={17}
                                                className="mt-0.5 shrink-0 text-green-400"
                                            />
                                            Add more relevant technical skills
                                        </li>

                                        <li className="flex items-start gap-2 text-sm text-gray-400">
                                            <CheckCircle2
                                                size={17}
                                                className="mt-0.5 shrink-0 text-green-400"
                                            />
                                            Improve resume formatting
                                        </li>

                                        <li className="flex items-start gap-2 text-sm text-gray-400">
                                            <CheckCircle2
                                                size={17}
                                                className="mt-0.5 shrink-0 text-green-400"
                                            />
                                            Include quantitative achievements
                                        </li>

                                        <li className="flex items-start gap-2 text-sm text-gray-400">
                                            <CheckCircle2
                                                size={17}
                                                className="mt-0.5 shrink-0 text-green-400"
                                            />
                                            Use a professional summary
                                        </li>

                                    </ul>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <SliderSection />

            <ProcessGuide />

            <InsightsAnalyzer />

            <WhyAnalyzer />

            <AnalyzeResume />

        </section>
    )
}

export default LandingPage
