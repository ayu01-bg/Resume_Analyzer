import { CheckCircle2 } from 'lucide-react'
import ScoreComparison from './ScoreComparison'

const OverallScore = ({ value = 75 }) => {

    const radius = 45
    const circumference = 2 * Math.PI * radius
    const offset = circumference - (value / 100) * circumference

    return (
        <section className="overallScore_container mt-10 w-full flex flex-col lg:flex-row gap-6 shadow-lg">

            {/* Overall Score Card */}
            <div className=" overallScore_wrapper relative w-full lg:w-1/3 min-h-85 p-6 bg-white/30 border border-gray-200 rounded-2xl flex flex-col items-center">

                {/* Heading */}
                <div className="w-full text-center">
                    <h2 className="text-xl font-semibold text-gray-800">
                        Overall Score
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                        Resume performance
                    </p>
                </div>


                {/* Score Ring */}
                <div className="relative mt-6">

                    <svg
                        className="w-44 h-44 -rotate-90"
                        viewBox="0 0 100 100"
                    >

                        {/* Background Ring */}
                        <circle
                            cx="50"
                            cy="50"
                            r={radius}
                            fill="none"
                            stroke="gray"
                            strokeWidth="8"
                            className="text-gray-200"
                        />

                        {/* Progress Ring */}
                        <circle
                            cx="50"
                            cy="50"
                            r={radius}
                            fill="none"
                            stroke="black"
                            strokeWidth="8"
                            strokeLinecap="round"
                            className="text-slate-700"
                            strokeDasharray={circumference}
                            strokeDashoffset={offset}
                        />

                    </svg>


                    {/* Score */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">

                        <span className="text-5xl font-bold text-gray-800">
                            {value}
                        </span>

                        <span className="text-sm font-medium text-gray-400">
                            / 100
                        </span>

                    </div>

                </div>


                {/* Status */}
                <div className="flex items-center gap-2 
                                mt-5 px-4 py-2 
                                rounded-full 
                                bg-gray-100 
                                text-gray-700">

                    <CheckCircle2 size={18} />

                    <span className="text-sm font-medium">
                        Good Score
                    </span>

                </div>

            </div>


            {/* Score Comparison */}
            <div className="w-full lg:w-2/3">
                <ScoreComparison />
            </div>

        </section>
    )
}

export default OverallScore