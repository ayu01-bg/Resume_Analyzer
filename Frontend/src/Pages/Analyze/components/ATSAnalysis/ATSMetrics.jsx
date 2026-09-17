import {
    FileText,
    Frame,
    LayoutPanelTop,
    LinkIcon,
    User
} from 'lucide-react'
import React from 'react'
import ATSIssue from './ATSIssue'

const ATSMetrics = () => {

    const atsMetricsData = [
        {
            icon: FileText,
            title: 'Parse Rate',
            score: '96%'
        },
        {
            icon: Frame,
            title: 'Format',
            score: '90'
        },
        {
            icon: User,
            title: 'Contact',
            score: '80'
        },
        {
            icon: LayoutPanelTop,
            title: 'Sections',
            score: '85'
        },
        {
            icon: LinkIcon,
            title: 'Links',
            score: '70'
        }
    ]

    return (
        <>


            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">

                {atsMetricsData.map((item, index) => {

                    const Icon = item.icon

                    return (
                        <div
                            key={index}
                            className="
                                flex items-center gap-3
                                p-4
                                bg-white
                                border border-gray-200
                                rounded-xl
                                shadow-sm
                                hover:shadow-md
                                transition-shadow duration-200
                            "
                        >

                            {/* Icon */}
                            <div
                                className="
                                    shrink-0
                                    p-2.5
                                    rounded-lg
                                    bg-gray-100
                                    text-gray-600
                                "
                            >
                                <Icon
                                    size={22}
                                    strokeWidth={1.8}
                                />
                            </div>


                            {/* Content */}
                            <div className="min-w-0">

                                <h3 className="text-sm font-medium text-gray-600 truncate">
                                    {item.title}
                                </h3>

                                <p className="text-xl font-semibold text-gray-800 mt-1">
                                    {item.score}
                                </p>

                            </div>

                        </div>
                    )
                })}


            </div>
            <ATSIssue />

        </>



    )
}

export default ATSMetrics