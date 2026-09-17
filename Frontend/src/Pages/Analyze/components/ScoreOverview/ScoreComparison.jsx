import { Code2, FileText, LucideTarget, ShieldAlert } from 'lucide-react'
import barIcon from '../../../../assets/Icons/barIcon.png'

const ScoreComparison = () => {

    const scores = [
        {
            label: 'ATS Compatibility',
            score: 82,
            icon: ShieldAlert,
        },
        {
            label: 'Content Quality',
            score: 76,
            icon: FileText,
        },
        {
            label: 'Skills',
            score: 71,
            icon: Code2,
        },
        {
            label: 'Job Match',
            score: 82,
            icon: LucideTarget,
        },
    ]

    return (
        <div className="w-full lg:w-2/3 p-6">

            {/* Header */}
            <div className="flex items-center gap-3 mb-6">

                <span className="p-2 rounded-lg bg-gray-100">
                    <img
                        src={barIcon}
                        className="w-7 h-7 opacity-70"
                        alt=""
                    />
                </span>

                <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                        Score Breakdown
                    </h2>

                    <p className="text-sm text-gray-500">
                        Detailed analysis of your resume
                    </p>
                </div>

            </div>


            {/* Scores */}
            <div className="flex flex-col gap-5">

                {scores.map((item, index) => {

                    const Icon = item.icon

                    return (
                        <div
                            key={index}
                            className="flex items-center w-full min-w-0"
                        >

                            {/* Icon */}
                            <div className="w-16 shrink-0 flex justify-center">

                                <span className="p-2.5 rounded-xl bg-gray-100 text-gray-600">
                                    <Icon size={22} strokeWidth={1.8} />
                                </span>

                            </div>


                            {/* Label */}
                            <div className="w-40 shrink-0 px-3">

                                <span className="text-sm font-medium text-gray-700">
                                    {item.label}
                                </span>

                            </div>


                            {/* Progress */}
                            <div className="flex-1 min-w-full px-4">

                                <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">

                                    <div
                                        className="h-full bg-slate-700 rounded-full transition-all duration-700"
                                        style={{
                                            width: `${item.score}%`
                                        }}
                                    />

                                </div>

                            </div>


                            {/* Score */}
                            <div className="w-12 shrink-0 text-right">

                                <span className="text-sm font-semibold text-gray-800">
                                    {item.score}
                                </span>

                            </div>

                        </div>
                    )
                })}

            </div>

        </div>
    )
}

export default ScoreComparison