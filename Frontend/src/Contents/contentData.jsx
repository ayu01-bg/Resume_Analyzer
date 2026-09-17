import React, { createContext } from 'react'
import { Dot, File, FileText, StarsIcon, ZapIcon, ChartNoAxesCombined, Search, UploadCloud, TargetIcon, SearchIcon, BriefcaseBusiness, Shield } from "lucide-react"

export const AppContext = createContext()

const ContentData = ({ children }) => {

    const navigationItems = [
        {
            name: 'How it works',
            to: '/#howitworks'
        },
        {
            name: 'Features',
            to: '/#insightsAnalyzer'
        },
        {
            name: 'WhyAnalyzer',
            to: '/#whyAnalyzer'
        }
    ]

    const Skills = [
        'Html',
        'CSS',
        'Javascript',
        'ReactJs',
        'NodeJs',
        'Express',
        'MangoDB'
    ]

    const items = [
        { icon: StarsIcon, title: 'AI', caption: 'Powered Analysis' },
        { icon: FileText, title: '5+', caption: 'Resume Analysis' },
        { icon: File, title: 'PDF', caption: 'Resume Support' },
        { icon: ZapIcon, title: 'Fast', caption: 'AI Feedback' }
    ]

    const analyzeData = [
        {
            id: '1',
            icon: UploadCloud,
            title: 'Upload Resume',
            description: 'Upload your resume in PDF format and let our analyzer extract the important inforamtion.',
            textColor: 'text-blue-400/80',
            bgColor:'bg-blue-300/20'
        },
        {   
            id: '2',
            icon: Search,
            title: 'AI Analysis',
            description: 'Our AI analyzes your resume across skills, experience, education, projects and ATS compatibility.',
            textColor: 'text-green-400/80',
            bgColor:'bg-green-300/20'
        },
        {
            id: '3',
            icon: ChartNoAxesCombined,
            title: 'Get Insights',
            description: 'Receive your ATS score, strengths, weakness, improvements, and recommended job roles.',
            textColor: 'text-purple-400/80',
            bgColor:'bg-purple-300/20'
        }
    ]

    const insightAnalyzeData = [
        {
            icon: TargetIcon,
            title: 'ATS Score',
            description: 'Find out how well your resume performs against Applicant Tracking Systems.'
        },
        {
            icon: ChartNoAxesCombined,
            title: 'Strengths',
            description: 'Discover the strongest parts of your resume, including skills, experience, projects, and achievements.'
        },
        {
            icon: SearchIcon,
            title: 'Weakness',
            description: 'Identifying missing information skill gaps, unclear description, and other issues.'
        },
        {
            icon: StarsIcon,
            title: 'Imporvments',
            description: 'Get practical suggestions to improve your resume structure, content, keywords, and ATS compatibility.'
        },
        {
            icon: BriefcaseBusiness,
            title: 'Recommended Roles',
            description: 'Discover job roles that match your education, experience, projects, and technical skill set.'
        },
        {
            icon: Shield,
            title: 'Resume Insights',
            description: 'Get an AI-powered overview of your resume without manually reviewing every section yourself.'
        }
    ]

    const whyAnalyzeData = [
        {
            icon: StarsIcon,
            title: 'AI-powered analysis',
            description: 'Get structure insights from your resume instead of generic resume advice.'
        },
        {
            icon: TargetIcon,
            title: 'Actionable recommendations',
            description: 'Understand what you should improve and why those changes matter.'
        },
        {
            icon: ChartNoAxesCombined,
            title: 'Better job training',
            description: 'Find job roles that align with your current profile and skills.'
        }
    ]


    const value = {
        navigationItems,
        analyzeData,
        items,
        Skills,
        insightAnalyzeData,
        whyAnalyzeData
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default ContentData  